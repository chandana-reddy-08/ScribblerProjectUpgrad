//firstpost

let editHeading = document.querySelector('.post-heading');
let editButton = document.querySelector('.edit-button');
let editContent = document.querySelector('.post-content');
let saveButton = document.querySelector('.save-button')



editButton.addEventListener('click', function() {
  // Enable editing of the heading and content
  editHeading.contentEditable = true;
  editHeading.focus();
  editContent.contentEditable = true;

  editHeading.style.padding = '6px';
  // Toggle visibility of buttons
  editButton.style.display = 'none';
  saveButton.style.display = 'inline-block';
});

saveButton.addEventListener('click', function() {
  // Disable editing of the heading and content
  editHeading.contentEditable = false;
  editContent.contentEditable = false;

  // Toggle visibility of buttons
  saveButton.style.display = 'none';
  editButton.style.display = 'inline-block';
});



function addComments(id) {
  let addEventName = id.value + '<br>';
  let commentContainer = document.getElementById('addEventNames');
  let newComment = document.createElement('p');
  newComment.innerHTML = addEventName;
  newComment.classList.add('comment');
  commentContainer.insertBefore(newComment, commentContainer.firstChild);
  id.value = id.defaultValue;
}


let count = 1;
const likeButton = document.getElementById('likeBlog');
const variable = document.getElementById('likeCount');
const likedButton = document.getElementsByClassName('liked-button')
likeButton.addEventListener('click', function LikeButton() {
likeButton.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'; 
  
if(count == 1 ){
  variable.innerHTML = count+" "+" person likes this!";
}
else{
  variable.innerHTML = count+" "+" people have liked this!";
}
count++;
});


//second post

let editHeading1 = document.querySelector('.post-heading1');
let editButton1 = document.querySelector('.edit-button1');
let editContent1 = document.querySelector('.post-content1');
let saveButton1 = document.querySelector('.save-button1')



editButton1.addEventListener('click', function() {
  // Enable editing of the heading and content
  editHeading1.contentEditable = true;
  editHeading1.focus();
  editContent1.contentEditable = true;

  editHeading1.style.padding = '6px';
  // Toggle visibility of buttons
  editButton1.style.display = 'none';
  saveButton1.style.display = 'inline-block';
});

saveButton1.addEventListener('click', function() {
  // Disable editing of the heading and content
  editHeading1.contentEditable = false;
  editContent1.contentEditable = false;

  // Toggle visibility of buttons
  saveButton1.style.display = 'none';
  editButton1.style.display = 'inline-block';
});



function addComments1(id) {
  let addEventName1 = id.value + '<br>';
  let commentContainer1 = document.getElementById('addEventNames1');
  let newComment1 = document.createElement('p');
  newComment1.innerHTML = addEventName1;
  newComment1.classList.add('comment1');
  commentContainer1.insertBefore(newComment1, commentContainer1.firstChild);
  id.value = id.defaultValue;
}


let count1 = 1;
const likeButton1 = document.getElementById('likeBlog1');
const variable1 = document.getElementById('likeCount1');
const likedButton1 = document.getElementsByClassName('liked-button1')
likeButton1.addEventListener('click', function LikeButton1() {
likeButton1.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'; 
  
if(count1 == 1 ){
  variable1.innerHTML = count1+" "+" person likes this!";
}
else{
  variable1.innerHTML = count1+" "+" people have liked this!";
}
count1++;
});


//third post

let editHeading2 = document.querySelector('.post-heading2');
let editButton2 = document.querySelector('.edit-button2');
let editContent2 = document.querySelector('.post-content2');
let saveButton2 = document.querySelector('.save-button2')



editButton2.addEventListener('click', function() {
  // Enable editing of the heading and content
  editHeading2.contentEditable = true;
  editHeading2.focus();
  editContent2.contentEditable = true;

  editHeading2.style.padding = '6px';
  // Toggle visibility of buttons
  editButton2.style.display = 'none';
  saveButton2.style.display = 'inline-block';
});

saveButton2.addEventListener('click', function() {
  // Disable editing of the heading and content
  editHeading2.contentEditable = false;
  editContent2.contentEditable = false;

  // Toggle visibility of buttons
  saveButton2.style.display = 'none';
  editButton2.style.display = 'inline-block';
});



function addComments2(id) {
  let addEventName2 = id.value + '<br>';
  let commentContainer2 = document.getElementById('addEventNames2');
  let newComment2 = document.createElement('p');
  newComment2.innerHTML = addEventName2;
  newComment2.classList.add('comment2');
  commentContainer2.insertBefore(newComment2, commentContainer2.firstChild);
  id.value = id.defaultValue;
}


let count2 = 1;
const likeButton2 = document.getElementById('likeBlog2');
const variable2 = document.getElementById('likeCount2');
const likedButton2 = document.getElementsByClassName('liked-button2')
likeButton2.addEventListener('click', function LikeButton2() {
likeButton2.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'; 
  
if(count2 == 1 ){
  variable2.innerHTML = count2+" "+" person likes this!";
}
else{
  variable2.innerHTML = count2+" "+" people have liked this!";
}
count2++;
});

//4th post


let editHeading3 = document.querySelector('.post-heading3');
let editButton3 = document.querySelector('.edit-button3');
let editContent3 = document.querySelector('.post-content3');
let saveButton3 = document.querySelector('.save-button3')



editButton3.addEventListener('click', function() {
  // Enable editing of the heading and content
  editHeading3.contentEditable = true;
  editHeading3.focus();
  editContent3.contentEditable = true;

  editHeading3.style.padding = '6px';
  // Toggle visibility of buttons
  editButton3.style.display = 'none';
  saveButton3.style.display = 'inline-block';
});

saveButton3.addEventListener('click', function() {
  // Disable editing of the heading and content
  editHeading3.contentEditable = false;
  editContent3.contentEditable = false;

  // Toggle visibility of buttons
  saveButton3.style.display = 'none';
  editButton3.style.display = 'inline-block';
});



function addComments3(id) {
  let addEventName3 = id.value + '<br>';
  let commentContainer3 = document.getElementById('addEventNames3');
  let newComment3 = document.createElement('p');
  newComment3.innerHTML = addEventName3;
  newComment3.classList.add('comment3');
  commentContainer3.insertBefore(newComment3, commentContainer3.firstChild);
  id.value = id.defaultValue;
}


let count3 = 1;
const likeButton3 = document.getElementById('likeBlog3');
const variable3 = document.getElementById('likeCount3');
const likedButton3 = document.getElementsByClassName('liked-button3')
likeButton3.addEventListener('click', function LikeButton3() {
likeButton3.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'; 
  
if(count3 == 1 ){
  variable3.innerHTML = count3+" "+" person likes this!";
}
else{
  variable3.innerHTML = count3+" "+" people have liked this!";
}
count3++;
});

//5th post


let editHeading4 = document.querySelector('.post-heading4');
let editButton4 = document.querySelector('.edit-button4');
let editContent4 = document.querySelector('.post-content4');
let saveButton4 = document.querySelector('.save-button4')



editButton4.addEventListener('click', function() {
  // Enable editing of the heading and content
  editHeading4.contentEditable = true;
  editHeading4.focus();
  editContent4.contentEditable = true;

  editHeading4.style.padding = '6px';
  // Toggle visibility of buttons
  editButton4.style.display = 'none';
  saveButton4.style.display = 'inline-block';
});

saveButton4.addEventListener('click', function() {
  // Disable editing of the heading and content
  editHeading4.contentEditable = false;
  editContent4.contentEditable = false;

  // Toggle visibility of buttons
  saveButton4.style.display = 'none';
  editButton4.style.display = 'inline-block';
});



function addComments4(id) {
  let addEventName4 = id.value + '<br>';
  let commentContainer4 = document.getElementById('addEventNames4');
  let newComment4 = document.createElement('p');
  newComment4.innerHTML = addEventName4;
  newComment4.classList.add('comment4');
  commentContainer4.insertBefore(newComment4, commentContainer4.firstChild);
  id.value = id.defaultValue;
}


let count4 = 1;
const likeButton4 = document.getElementById('likeBlog4');
const variable4 = document.getElementById('likeCount4');
const likedButton4 = document.getElementsByClassName('liked-button4')
likeButton4.addEventListener('click', function LikeButton4() {
likeButton4.innerHTML = '<i class="fa-solid fa-thumbs-up"></i> Liked!'; 
  
if(count4 == 1 ){
  variable4.innerHTML = count4+" "+" person likes this!";
}
else{
  variable4.innerHTML = count4+" "+" people have liked this!";
}
count4++;
});