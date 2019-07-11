// Inspired by yamsellem's hanoï towers

let uls = document.querySelectorAll('.tower'),
    memo, 
    count = 0,   
    bestScore = parseInt(localStorage.getItem('bestscore')) || 0, 
    bestScoreItem = document.querySelector('.bestScore'), 
    endMessage = document.querySelector('.endMessage');

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

            if (ul === uls[2] && ul.querySelectorAll('li').length === 6) {
                ul.classList.add('is-won');
                endMessage.style.display = 'block';
                endMessage.querySelector('h3').innerHTML = 'Congrats ! You won in ' + count + ' moves'; 
                endMessage.querySelector('p').addEventListener('click', function(){
                    location.reload()
                    endMessage.style.display = 'none';
                });

                if (count < bestScore || !(localStorage.getItem('bestscore'))) {
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