let iconElement = document.getElementById('iconTrash');
let modalElement = document.getElementById('myModal');
//let closeElement = document.getElementsByClassName('close')[0];

// Open the modal when the icon is clicked
iconElement.addEventListener('click', function() {
  modalElement.style.display = 'block';
});
// Close the modal when clicking outside the modal content
window.addEventListener('click', function(event) {
  if (event.target == modalElement) {
    modalElement.style.display = 'none';
  }
});


//function to delete the post

function deletePost(postId) {
  // TODO: Add your logic to delete the post with the given postId
  console.log("Deleting post with ID:", postId);

  // Remove the post element from the DOM
  let postElement = document.getElementById(postId);
  if (postElement) {
    postElement.parentNode.removeChild(postElement);
  }

  // Close the modal
  let modal = document.getElementById("myModal");
  let bootstrapModal = bootstrap.Modal.getInstance(modal);
  bootstrapModal.hide();
}





function redirectToAnotherPage() {
  window.location.href = "post.html";
}
