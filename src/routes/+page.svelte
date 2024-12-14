<script lang="ts">
  import Header from '$lib/components/header.svelte';
  import Landing from '$lib/components/landing.svelte';

</script>

<div class="landing-page">
  <Header/> 
  
<div class="buttons">
  <!-- Buttons that lead to login  -->
  <a href ='http://localhost:5173/login/doctor/'  class="btn">I am a Doctor</a>
  <a href ='http://localhost:5173/login/patient/'  class="btn">I am a Patient</a>
</div>
  <Landing/>
</div>

<style> 
.landing-page {
    display: flex;
    z-index: -1;
    flex-direction: column;
}

:global(:root) {
    --background-colour: #bac6f4;
    --background-hover-colour: #ddd;
    --border-colour: #8299ed;
    --accent-colour: #a0b1ef;
    --text-colour: #000;
    --secondary-text-colour: #ccc;
  } 

  
  .buttons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px; /* Space between buttons */
    z-index: 3;
  }

  .btn {
    font-size: 1.5rem; /* Large font size */
    padding: 40px 40px; /* Larger padding for a big button */
    background-color: #007BFF; /* Primary button color */
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;  
    transition: background-color 0.3s ease;
    text-decoration: none;
    font-weight: bold;
  }

  .btn:hover {
    background-color: #0056b3; /* Darker shade on hover */
  }

  .btn:active {
    background-color: #004085; /* Even darker shade when clicked */
  }
</style>
