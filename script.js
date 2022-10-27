$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;

let playerAP = 100;

function onReady() {

    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!

    $('.arcane-sceptre').on('click', attackTargetArcaneSceptre);
    $('.entangle').on('click', attackTargetEntangle);
    $('.dragon-blade').on('click', attackTargetDragonBlade);
    $('.star-fire').on('click', attackTargetStarFire);



    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}


function render() {
    console.log('fungusHP is: ', fungusHP);
    //updates the HPDAMAGE delt to the fungus by substracting the HPDAMAGE to the fungusHP.
    $('.hp-text').html(`
    
       <div class="hp-text">${fungusHP}HP</div>
    
    `)

    //updates the values for the playersAP depending on the cost of the attack. Subtract the playerAP by the value apCost. 
    console.log('PlayerAP is: ', playerAP);
    $('.ap-text').html(`
        <div class="ap-text">${playerAP}AP</div>
    `)


    healthState();
}


function healthState() {

    /*  conditional where if the HP of fungus is below ZERO and 
            when the player AP is above Zero THEN fungus is DEAD.
            
            Update the div from 'walk' to 'dead'
        */
    if (fungusHP <= 0 && playerAP > 0) {
        $('.freaky-fungus.walk').html(`
        
            <div class="freaky-fungus dead"></div>
        `)

        $('.hp-text').html(`
             <div class="hp-text">0 HP</div>
        `)
    }
    //conditional where the PlayerAP is zero and the HP of the fugus is greater than the value of PLayerAP then Player lost and fungus is delcared the winner. 
    if (fungusHP > 0 && playerAP <= 0) {
        $('.freaky-fungus.walk').html(`
        
            <div class="freaky-fungus jump"></div>
        `)
        $('.ap-text').html(' <div class="ap-text">0 AP</div>')
    }

}

function attackTargetArcaneSceptre() {
    apCost = 12;
    hpDamage = 14;

    fungusHP -= hpDamage;
    playerAP -= apCost;

    render();
    /*
    
    console.log('fungusHP is: ', fungusHP);
    //updates the HPDAMAGE delt to the fungus by substracting the HPDAMAGE to the fungusHP.
    $('.hp-text').html(`
    
       <div class="hp-text">${fungusHP}HP</div>
    
    `)

    //updates the values for the playersAP depending on the cost of the attack. Subtract the playerAP by the value apCost. 
    console.log('PlayerAP is: ', playerAP);
    $('.ap-text').html(`
        <div class="ap-text">${playerAP}AP</div>
    `)

    */
}

function attackTargetEntangle() {
    apCost = 23;
    hpDamage = 9;

    fungusHP -= hpDamage;
    playerAP -= apCost;

    render();

    /*
    console.log('fungusHP is:', fungusHP);

    $('.hp-text').html(`
       <div class="hp-text">${fungusHP}HP</div>
    `)

    console.log('PlayerAP is: ', playerAP);
    $('.ap-text').html(`
        <div class="ap-text">${playerAP}AP</div>
    `)
    */

}

function attackTargetDragonBlade() {
    apCost = 38;
    hpDamage = 47;

    fungusHP -= hpDamage;
    playerAP -= apCost;

    render();

    /*
   
    console.log('fungusHP is: ', fungusHP);

    $('.hp-text').html(`
    
       <div class="hp-text">${fungusHP}HP</div>
    
    `)

    console.log('PlayerAP is: ', playerAP);
    $('.ap-text').html(`
        <div class="ap-text">${playerAP}AP</div>
    `)
    */

}

function attackTargetStarFire() {
    apCost = 33;
    hpDamage = 25;

    fungusHP -= hpDamage;
    playerAP -= apCost;

    render();

    /*
     
    console.log('fungusHP is: ', fungusHP);
    
    $('.hp-text').html(`
     
       <div class="hp-text">${fungusHP}HP</div>
     
    `)
    
    console.log('PlayerAP is: ', playerAP);
    $('.ap-text').html(`
        <div class="ap-text">${playerAP}AP</div>
    `)
    
    */
}
