document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button-build").addEventListener('click', function () {
        builder = new CardBuilder({
            elementInputPointId: 'content',
            cardNameId: 'card-name'}
            );
        builder.build();
    });
});

class CardBuilder {
    elementInputPointId;
    cardId = null
    containerClass = 'card-container'

    constructor({elementInputPointId, cardNameId}) {
        this.elementInputPointId = elementInputPointId;
        let cardName = document.getElementById(cardNameId).value;
        if (cardName.length > 0) {
            this.cardId = cardName;
        }
    }

    build() {
        let parent = document.getElementById(this.elementInputPointId);
        parent.append(this.buildCardContainer())
    }

    buildCardContainer() {
        let parent = document.createElement('div');
        parent.classList.add('row', this.containerClass);
/*
        let col = document.createElement('div');
        col.classList.add('col-sm-12');
        col.append(this.buildCardInfoContainer())
        parent.append(col);
*/
        parent.append(this.buildCardInfoContainer({
            cardId: 'mu-as',
            cardName: 'Туз пентаклей',
            themeId: 'mu',
        }));
        return parent;
    }

    buildCardInfoContainer({cardId, cardName, themeId}) {
        let parent = document.createElement('div');
        let cardImgRef = './css/img/cards/mu-as-preview-2.jpg';
        parent.classList.add('card', 'mb-3', 'w-25')
        let innerHtml = `
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="${cardImgRef}" class="card-img" alt="${cardName}">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Название карточки</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>

        `;
        parent.innerHTML = innerHtml;
        return parent;
    }

    buildCardKeyWordElement(name) {

    }
}

