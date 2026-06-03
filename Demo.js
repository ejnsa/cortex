const postInput = document.getElementById('postInput');
const postButton = document.getElementById('postButton');
const postShower = document.getElementById('postShower');
const postShower2 = document.getElementById('postShower2');
const postShower3 = document.getElementById('postShower3');
const postShower4 = document.getElementById('postShower4');
const postShower5 = document.getElementById('postShower5');
const postShower6 = document.getElementById('postShower6');
const postShower7 = document.getElementById('postShower7');
const postShower8 = document.getElementById('postShower8');
const postShower9 = document.getElementById('postShower9');
const postShower10 = document.getElementById('postShower10');
const postShower11 = document.getElementById('postShower11');
const postShower12 = document.getElementById('postShower12');
const postShower13 = document.getElementById('postShower13');
const postShower14 = document.getElementById('postShower14');
const postShower15 = document.getElementById('postShower15');
const postShower16 = document.getElementById('postShower16');
const postShower17 = document.getElementById('postShower17');
const postShower18 = document.getElementById('postShower18');
const postShower19 = document.getElementById('postShower19');
const postShower20 = document.getElementById('postShower20');
const postShower21 = document.getElementById('postShower21');
const postShower22 = document.getElementById('postShower22');
const postShower23 = document.getElementById('postShower23');
const postShower24 = document.getElementById('postShower24');
const postShower25 = document.getElementById('postShower25');
const postShower26 = document.getElementById('postShower26');
const postShower27 = document.getElementById('postShower27');
const postShower28 = document.getElementById('postShower28');
const postShower29 = document.getElementById('postShower29');
const postShower30 = document.getElementById('postShower30');
const postShower31 = document.getElementById('postShower31');
const postShower32 = document.getElementById('postShower32');
const postShower33 = document.getElementById('postShower33');
const postShower34 = document.getElementById('postShower34');
const postShower35 = document.getElementById('postShower35');
const postShower36 = document.getElementById('postShower36');
const postShower37 = document.getElementById('postShower37');
const postShower38 = document.getElementById('postShower38');
const postShower39 = document.getElementById('postShower39');
const postShower40 = document.getElementById('postShower40');
const postShower41 = document.getElementById('postShower41');
const postShower42 = document.getElementById('postShower42');
const postShower43 = document.getElementById('postShower43');
const postShower44 = document.getElementById('postShower44');
const postShower45 = document.getElementById('postShower45');
const postShower46 = document.getElementById('postShower46');
const postShower47 = document.getElementById('postShower47');
const postShower48 = document.getElementById('postShower48');
const postShower49 = document.getElementById('postShower49');
const postShower50 = document.getElementById('postShower50');
const postShower51 = document.getElementById('postShower51');


postButton.addEventListener('click', () => {
    const oldPost = localStorage.getItem('postInput') || "";
    const value = oldPost + postInput.value + '<br>';
    localStorage.setItem("postInput", value);
    location.reload();
});

window.addEventListener('load', () => {
    const value = localStorage.getItem("postInput") || "";
    
    // Split the massive string by '<br>' into a list of separate posts
    const postsArray = value.split('<br>');
    
    // Drop the 1st post into the 1st box (if it exists)
    if (postsArray[0]) {
        postShower.innerHTML = postsArray[0];
    }
    
    // Drop the 2nd post into the 2nd box (if it exists)
    else if (postsArray[1]) {
        postShower2.innerHTML = postsArray[1];
    }
    
    // Drop the 3rd post into the 3rd box (if it exists)
    else if (postsArray[2]) {
        postShower3.innerHTML = postsArray[2];
    }
    
    // Drop the 4th post into the 4th box (if it exists)
    else if (postsArray[3]) {
        postShower4.innerHTML = postsArray[3];
    }
    else if (postsArray[4]) {
        postShower5.innerHTML = postsArray[4];
    }
    else if (postsArray[5]) {
        postShower6.innerHTML = postsArray[5];
    }
    else if (postsArray[6]) {
        postShower7.innerHTML = postsArray[6];
    }
    else if (postsArray[7]) {
        postShower8.innerHTML = postsArray[7];
    }
    else if (postsArray[8]) {
        postShower9.innerHTML = postsArray[8];
    }
    else if (postsArray[9]) {
        postShower10.innerHTML = postsArray[9];
    }
    else if (postsArray[10]) {
        postShower11.innerHTML = postsArray[10];
    }
    else if (postsArray[11]) {
        postShower12.innerHTML = postsArray[11];
    }
    else if (postsArray[12]) {
        postShower13.innerHTML = postsArray[12];
    }
    else if (postsArray[13]) {
        postShower14.innerHTML = postsArray[13];
    }
    else if (postsArray[14]) {
        postShower15.innerHTML = postsArray[14];
    }
    else if (postsArray[15]) {
        postShower16.innerHTML = postsArray[15];
    }
    else if (postsArray[16]) {
        postShower17.innerHTML = postsArray[16];
    }
    else if (postsArray[17]) {
        postShower18.innerHTML = postsArray[17];
    }
    else if (postsArray[18]) {
        postShower19.innerHTML = postsArray[18];
    }
    else if (postsArray[19]) {
        postShower20.innerHTML = postsArray[19];
    }
    else if (postsArray[20]) {
        postShower21.innerHTML = postsArray[20];
    }
    else if (postsArray[21]) {
        postShower22.innerHTML = postsArray[21];
    }
    else if (postsArray[22]) {
        postShower23.innerHTML = postsArray[22];
    }
    else if (postsArray[23]) {
        postShower24.innerHTML = postsArray[23];
    }
    else if (postsArray[24]) {
        postShower25.innerHTML = postsArray[24];
    }
    else if (postsArray[25]) {
        postShower26.innerHTML = postsArray[25];
    }
    else if (postsArray[26]) {
        postShower27.innerHTML = postsArray[26];
    }
    else if (postsArray[27]) {
        postShower28.innerHTML = postsArray[27];
    }
    else if (postsArray[28]) {
        postShower29.innerHTML = postsArray[28];
    }
    else if (postsArray[29]) {
        postShower30.innerHTML = postsArray[29];
    }
    else if (postsArray[30]) {
        postShower31.innerHTML = postsArray[30];
    }
    else if (postsArray[31]) {
        postShower32.innerHTML = postsArray[31];
    }
    else if (postsArray[32]) {
        postShower33.innerHTML = postsArray[32];
    }
    else if (postsArray[33]) {
        postShower34.innerHTML = postsArray[33];
    }
    else if (postsArray[35]) {
        postShower36.innerHTML = postsArray[35];
    }
    else if (postsArray[36]) {
        postShower37.innerHTML = postsArray[36];
    }
    else if (postsArray[37]) {
        postShower38.innerHTML = postsArray[37];
    }
    else if (postsArray[38]) {
        postShower39.innerHTML = postsArray[38];
    }
    else if (postsArray[39]) {
        postShower40.innerHTML = postsArray[39];
    }
    else if (postsArray[40]) {
        postShower41.innerHTML = postsArray[40];
    }
    else if (postsArray[42]) {
        postShower42.innerHTML = postsArray[42];
    }
    else if (postsArray[43]) {
        postShower43.innerHTML = postsArray[43];
    }
    else if (postsArray[44]) {
        postShower44.innerHTML = postsArray[44];
    }
    else if (postsArray[45]) {
        postShower45.innerHTML = postsArray[45];
    }
    else if (postsArray[46]) {
        postShower46.innerHTML = postsArray[46];
    }
    else if (postsArray[47]) {
        postShower47.innerHTML = postsArray[47];
    }
    else if (postsArray[48]) {
        postShower48.innerHTML = postsArray[48];
    }
    else if (postsArray[49]) {
        postShower49.innerHTML = postsArray[49];
    }
    else if (postsArray[50]) {
        postShower50.innerHTML = postsArray[50];
    }
    else if (postsArray[51]) {
        postShower51.innerHTML = postsArray[51];
    }
    else if (postsArray[52]) {
        postShower52.innerHTML = postsArray[52];
    }
    else if (postsArray[53]) {
        postShower53.innerHTML = postsArray[53];
    }
    else if (postsArray[54]) {
        postShower54.innerHTML = postsArray[54];
    }
    else if (postsArray[55]) {
        postShower55.innerHTML = postsArray[55];
    }

});

