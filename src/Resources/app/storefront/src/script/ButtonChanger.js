import Plugin from 'src/plugin-system/plugin.class'

export default class changeButton extends Plugin {

    static options = {
        ButtonText: 'Wird in den Warenkorb gelegt',
        ButtonColor: '#595959',
        oldText:'Add to shopping cart',
        oldColor:'#09427c',
    }

    init() {
        console.info('plugin loaded',this.options.ButtonText);
        
        const buyButtons = document.querySelectorAll('.btn-buy');

        buyButtons.forEach(button => {
            button.addEventListener('click', () => {
                this.changeButtonText(button);
                this.changeButtonColor(button);
                setTimeout(() => {
                    this.changeBackButton(button);

                }, 1000);
            });
        });

    }

    changeButtonText(button) {
        button.innerHTML = this.options.ButtonText;

    }

    changeButtonColor(button) {
       button.style.backgroundColor = this.options.ButtonColor;

    }

    changeBackButton(button) {
        button.style.backgroundColor = this.options.oldColor;
        button.innerHTML = this.options.oldText;
    }


}