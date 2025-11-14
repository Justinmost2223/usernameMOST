document.getElementById('currentYear').textContent = new Date().getFullYear();

        // Survey
        const optionBtns = document.querySelectorAll('.option-btn');
        const surveyNext = document.getElementById('surveyNext');
        optionBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                optionBtns.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                document.getElementById('level').value = btn.dataset.level;
                surveyNext.style.display='block';
            });
        });
        surveyNext.addEventListener('click', () => document.getElementById('contact').scrollIntoView({behavior:'smooth'}));

        // Contact form
        const contactForm = document.getElementById('contactForm');
        const confirmationMessage = document.getElementById('confirmationMessage');
        contactForm.addEventListener('submit', (e)=> {
            e.preventDefault();
            confirmationMessage.style.display='block';
            contactForm.reset();
            setTimeout(()=> confirmationMessage.style.display='none',5000);
        });

        // Chat
        const chatMessages = document.getElementById('chatMessages');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        sendBtn.addEventListener('click', sendMessage);
        userInput.addEventListener('keypress', (e)=> { if(e.key==='Enter') sendMessage(); });
        function addMessage(text,isUser=false){
            const div=document.createElement('div');
            div.className='message '+(isUser?'user-message':'bot-message');
            const bubble=document.createElement('div');
            bubble.className='message-bubble '+(isUser?'user-bubble':'bot-bubble');
            bubble.textContent=text;
            div.appendChild(bubble);
            chatMessages.appendChild(div);
            chatMessages.scrollTop=chatMessages.scrollHeight;
        }
        function sendMessage(){
            const msg=userInput.value.trim();
            if(msg){ addMessage(msg,true); userInput.value='';
                setTimeout(()=> addMessage('¡Gracias por tu mensaje! Contacta para aprender ajedrez profesional.'),500);
            }
        }
