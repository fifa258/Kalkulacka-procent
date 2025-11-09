const btn = document.getElementById('btn');
const result = document.getElementById('result');

let procenta = {
    x: 0,
    y: 0,
    type: '',

    vypocet: function () {
        return this.x / 100;
    },

    calc: function () {
        if (this.type === 'of') {
            return this.y * this.vypocet();
        } else if (this.type === 'from') {
            if (this.y === 0) return 'Chyba: Y nesmí být 0';
            return (this.x / this.y) * 100;
        }
    }
}

btn.addEventListener('click', function () {
    procenta.x = document.getElementById('x').value;
    procenta.y = document.getElementById('y').value;
    procenta.type = document.getElementById('type').value;

const vysledek = procenta.calc();

    result.innerHTML = `Výsledek: ${vysledek}${procenta.type === 'from' ? '%' : ''}`;

});