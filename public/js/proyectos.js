const modal = document.getElementById('modal');
        const closeBtn = document.getElementById('close-btn');
        const modalTitle = document.getElementById('modal-title');
        const modalConcept = document.getElementById('modal-concept');
        const modalImg = document.getElementById('modal-img');
        const guion1 = document.getElementById('guion1');
        const guion2 = document.getElementById('guion2');
        const guion3 = document.getElementById('guion3');

        document.querySelectorAll('.idea').forEach(card => {
            card.addEventListener('click', () => {
                modalTitle.textContent = card.dataset.title;
                modalConcept.textContent = card.dataset.concept;
                guion1.textContent = card.dataset.guion1;
                guion2.textContent = card.dataset.guion2;
                guion3.textContent = card.dataset.guion3;
                modalImg.src = card.dataset.img;
                modal.classList.add('active');
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.classList.remove('active');
        });