var normal_frequencies = {
    E: 82,
    A: 110,
    D: 147,
    G: 196,
    B: 247,
    E2: 330,
};

function init(){
    jQuery('#tuning_freq').change(function(){
        console.log('tuning_freq change runs');
        let tuning_freq = jQuery(this).val();
        set_strings_freqs(tuning_freq);
    });
    jQuery( "#vol" ).change(function() {
    });

    let tuning_freq = jQuery('#tuning_freq').val();
    set_strings_freqs(tuning_freq);

    jQuery('.string').click(function(){
        let play_freq_hz = jQuery(this).find('.hertz').attr('data-freq');
        let play_vol = jQuery('#vol').val();
        play_freq(play_freq_hz,play_vol);
    });
    jQuery('.stop').click(function(){
        stop_freq();
    });

}
function set_strings_freqs(freq){
    console.log('set_strings_freqs(freq) runs',freq);

    let E2_freq = tuned_freq(normal_frequencies.E2,freq);
    jQuery('.guitarstring1 .hertz').html(E2_freq+'Hz').attr('data-freq',E2_freq);

    let B_freq = tuned_freq(normal_frequencies.B,freq);
    jQuery('.guitarstring2 .hertz').html(B_freq+'Hz').attr('data-freq',B_freq);

    let G_freq = tuned_freq(normal_frequencies.G,freq);
    jQuery('.guitarstring3 .hertz').html(G_freq+'Hz').attr('data-freq',G_freq);

    let D_freq = tuned_freq(normal_frequencies.D,freq);
    jQuery('.guitarstring4 .hertz').html(D_freq+'Hz').attr('data-freq',D_freq);

    let A_freq = tuned_freq(normal_frequencies.A,freq);
    jQuery('.guitarstring5 .hertz').html(A_freq+'Hz').attr('data-freq',A_freq);

    let E_freq = tuned_freq(normal_frequencies.E,freq);
    jQuery('.guitarstring6 .hertz').html(E_freq+'Hz').attr('data-freq',E_freq);
}
function tuned_freq(normal_freq,tuning_freq){
    return normal_freq * tuning_freq / 440;
}
var osci1;
var gain1;
function play_freq(freq,vol){
    stop_freq();
    osci1 = createOscillo(freq,vol,0);
}
function stop_freq(){
    if(osci1 != null && typeof osci1 == 'object' && osci1.constructor.name=='OscillatorNode') {
        osci1.stop();
    }
}
function createOscillo(frequency,volume,panning){
    // create web audio api context
    let audioCtx = new AudioContext();

    // create Oscillator node
    let oscillator = audioCtx.createOscillator();
    oscillator.type = 'triangle'; //square, sine, sawtooth, triangle
    oscillator.frequency.value = frequency; // value in hertz


    //create Gain node
    gain1 = audioCtx.createGain();
    gain1.gain.value = volume;

    //create Panner node
    let panner = audioCtx.createStereoPanner();
    panner.pan.value = panning;


    //connect oscillator in gain
    oscillator.connect(gain1);

    //connect gain in panner
    gain1.connect(panner);

    //connect panner to destination
    panner.connect(audioCtx.destination);

    //start osci
    oscillator.start();

    return oscillator;
}