// Inspired by yamsellem's hanoï towers

let uls = document.querySelectorAll('ul'), 
memo;

for (let i = 0; i < uls.length; i++) {
    uls[i].addEventListener('click', () => {
        let ul = uls[i], 
            firstLi = ul.querySelector('li');
            
        if (memo && (!firstLi || firstLi.dataset.weight > memo.dataset.weight)) {
            ul.prepend(memo);
            memo = undefined;

            if (ul === uls[2] && ul.querySelectorAll('li').length === 6) {
            ul.classList.add('is-won');
            } 
        } else {
            memo = firstLi; 
        }
    }) 
}