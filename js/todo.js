
let count = 0;
document.getElementById('task-btn').addEventListener('click', function(event){
    event.preventDefault();

    
    const input = document.getElementById('input-value').value;
    if (input.trim() === '') {
        alert("Please enter a task.");
        return;
    }
    else{
        count++;
    }
    const text= document.createElement('tr') ;
     text.innerHTML=
    `
                <th>${count}</th>
                <td class="discription">${input}</td>
                <button class=" mt-2 btn btn-danger btn-xs delete-btn">Delete</button>
        
    `
    document.getElementById('content-container').appendChild(text);
    
    document.getElementById('input-value').value = '';

    text.querySelector('.delete-btn').addEventListener('click', function() {
        text.remove();
        count--;
        updateRowNumbers();
    });
    
});
document.getElementById('clear-btn').addEventListener('click', function(e){
    e.preventDefault();
    document.getElementById('content-container').innerHTML = '';
    count = 0;
   
    
    
    
})