
// --------- NOAKHALI --------

document.getElementById('Noakhali-donate-btn').addEventListener('click', function(event){
        event.preventDefault;

        const customerBalance = innerTextToNumbrerById('customer-cuuretnt-balance');


        const currentBalance = innerTextToNumbrerById('noakhali-cuurent-balance');
        

        const inputAmount = inputTextToNumbrerById('noakhali-input-amount');

        if(isNaN(inputAmount)){
            alert('Please Input Your Amount in NUMBER');
            document.getElementById('noakhali-input-amount').value = '';
        }else{

            if( inputAmount < customerBalance){

                document.getElementById('noakhali-cuurent-balance').textContent = currentBalance + inputAmount;

                document.getElementById('customer-cuuretnt-balance').textContent = customerBalance - inputAmount;

                // Open the modal when the donation is successful
                const modal = document.getElementById('my_modal_1');
                modal.showModal();  

                // clear the input value
                document.getElementById('noakhali-input-amount').value = '';


                // value will add to the history section
                const noakhaliCamp =  document.getElementById('noakhali-campaign').innerText;

                const historySection = document.getElementById('history');


                const div = document.createElement('div'); 
                const date = new Date();

                div.innerHTML = `
                    <h1>${inputAmount} Taka is ${noakhaliCamp}.</h1>
                    <h1 class="font-light text-sm"> ${date} </h1>
                `
                
                div.classList.add('border-2');
                div.classList.add('border-solid');
                div.classList.add('border-yellow-500');
                div.classList.add('rounded-xl');
                div.classList.add('mt-2');
                div.classList.add('bg-white');
                

                historySection.appendChild(div);
                


            }else{
                alert("You Don't Have Sufficient Balance");
                document.getElementById('noakhali-input-amount').value = '';
                
            }
        }


})

// ------------ feni --------

document.getElementById('feni-donate-btn').addEventListener('click', function(event){
    event.preventDefault;

    const customerBalance = innerTextToNumbrerById('customer-cuuretnt-balance');
    


    const currentBalance = innerTextToNumbrerById('feni-current-balance');
    

    const inputAmount = inputTextToNumbrerById('feni-input-amount');
    

    if(isNaN(inputAmount)){
        alert('Please Input Your Amount in NUMBER');
        document.getElementById('feni-input-amount').value = '';
    }else{

        if( inputAmount < customerBalance){

            document.getElementById('feni-current-balance').textContent = currentBalance + inputAmount;

            document.getElementById('customer-cuuretnt-balance').textContent = customerBalance - inputAmount;

            // Open the modal when the donation is successful
            const modal = document.getElementById('my_modal_2');
            modal.showModal();  

            // clear the input value
            document.getElementById('feni-input-amount').value = '';


            // value will add to the history section
            const feniCamp =  document.getElementById('feni-campaign').innerText;

            const historySection = document.getElementById('history');


            const div = document.createElement('div'); 
            const date = new Date();

            div.innerHTML = `
                <h1>${inputAmount} Taka is ${feniCamp}.</h1>
                <h1 class="font-light text-sm"> ${date} </h1>
            `
            
            div.classList.add('border-2');
            div.classList.add('border-solid');
            div.classList.add('border-yellow-500');
            div.classList.add('rounded-xl');
            div.classList.add('mt-2');
            div.classList.add('bg-white');
            

            historySection.appendChild(div);

        }else{
            alert("You Don't Have Sufficient Balance");
            document.getElementById('feni-input-amount').value = '';
            
        }
    }


})

// -------------- Quota -----------

document.getElementById('quota-donate-btn').addEventListener('click', function(event){
    event.preventDefault;

    const customerBalance = innerTextToNumbrerById('customer-cuuretnt-balance');
    


    const currentBalance = innerTextToNumbrerById('quota-current-balance');
    

    const inputAmount = inputTextToNumbrerById('quota-donate-amount');
    

    if(isNaN(inputAmount)){
        alert('Please Input Your Amount in NUMBER');
        document.getElementById('feni-input-amount').value = '';
    }else{

        if( inputAmount < customerBalance){

            document.getElementById('quota-current-balance').textContent = currentBalance + inputAmount;

            document.getElementById('customer-cuuretnt-balance').textContent = customerBalance - inputAmount;

            // Open the modal when the donation is successful
            const modal = document.getElementById('my_modal_3');
            modal.showModal();  

            // clear the input value
            document.getElementById('quota-donate-amount').value = '';


            // value will add to the history section
            const quotaCamp =  document.getElementById('quota-campaign').innerText;

            const historySection = document.getElementById('history');


            const div = document.createElement('div'); 
            const date = new Date();

            div.innerHTML = `
                <h1>${inputAmount} Taka is donated for ${quotaCamp}.</h1>
                <h1 class="font-light text-sm"> ${date} </h1>
            `
            
            div.classList.add('border-2');
            div.classList.add('border-solid');
            div.classList.add('border-yellow-500');
            div.classList.add('rounded-xl');
            div.classList.add('mt-2');
            div.classList.add('bg-white');
            

            historySection.appendChild(div);

        }else{
            alert("You Don't Have Sufficient Balance");
            document.getElementById('quota-donate-amount').value = '';
            
        }
    }


})


// ------------ Donation and History Button -----


document.getElementById('history-btn').addEventListener('click', function(event){

    document.getElementById('header-banner').classList.add('hidden');
    document.getElementById('Noakhali').classList.add('hidden');
    document.getElementById('Feni').classList.add('hidden');
    document.getElementById('quota').classList.add('hidden');
    document.getElementById('divider-1').classList.add('hidden');
    document.getElementById('divider-2').classList.add('hidden');
    document.getElementById('divider-3').classList.add('hidden');
    
    document.getElementById('history').classList.remove('hidden');
    document.getElementById('history-btn').classList.remove('bg-yellow-500');
    document.getElementById('history-btn').classList.add('bg-slate-700');

    document.getElementById('donation-btn').classList.remove('bg-slate-700');
    document.getElementById('donation-btn').classList.add('bg-yellow-500');
    
    

    



})

document.getElementById('donation-btn').addEventListener('click', function(){

    document.getElementById('header-banner').classList.remove('hidden');
    document.getElementById('Noakhali').classList.remove('hidden');
    document.getElementById('Feni').classList.remove('hidden');
    document.getElementById('quota').classList.remove('hidden');
    document.getElementById('divider-1').classList.remove('hidden');
    document.getElementById('divider-2').classList.remove('hidden');
    document.getElementById('divider-3').classList.remove('hidden');
    document.getElementById('history').classList.add('hidden');
    
    
    document.getElementById('donation-btn').classList.remove('bg-yellow-500');
    document.getElementById('donation-btn').classList.add('bg-slate-700');


    document.getElementById('history-btn').classList.remove('bg-slate-700');
    document.getElementById('history-btn').classList.add('bg-yellow-500');
    


})



// -------- Blog Btn Function -------
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './blog.html';
})



