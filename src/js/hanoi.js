// Inspired by yamsellem's hanoï towers

let uls = document.querySelectorAll('.tower'),
    memo, 
    count = 0,   
    bestScore = parseInt(localStorage.getItem('bestscore')) || 0, 
    bestScoreItem = document.querySelector('.bestScore');

bestScoreItem.innerHTML = 'Best Score : ' + bestScore;

for (let i = 0; i < uls.length; i++) {
    uls[i].addEventListener('click', () => {
        let ul = uls[i], 
            firstLi = ul.querySelector('li');
            
        if (memo && (!firstLi || firstLi.dataset.weight > memo.dataset.weight)) {
            count+= 1; 
            let score = document.querySelector('.score').innerHTML = 'Score : ' + count;
            ul.prepend(memo);
            memo = undefined;

            if (ul === uls[2] && ul.querySelectorAll('li').length === 1) {
                ul.classList.add('is-won');

                if (count < bestScore) {
                    bestScore = count; 
                    bestScoreItem.innerHTML = 'Best Score : ' + bestScore;
                    localStorage.setItem('bestscore', count);
                }
            } 
        } else {
            memo = firstLi; 
        }
    }) 
};