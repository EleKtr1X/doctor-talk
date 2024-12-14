<script lang="ts">
	import { goto } from '$app/navigation';
    import Header from '$lib/components/header.svelte';
    import Landing from '$lib/components/landing.svelte';
    import data from '$lib/database/data.json';

    import { personObject } from '../../../stores';
    import { isDoctor } from '../../../stores';

    let typed_email = "";
    let typed_password = "";

    function loginUser() {
      const works = (y: { email: string; password: string; }) => y.email == typed_email && y.password == typed_password;
      const patient = data.filter(x => x.patients.filter(works))[0].patients.filter(works)[0];
      if (patient) {
        personObject.set(patient)
        isDoctor.set(false);
        const element = document.getElementById('loginBox');
        if (element) {
          (element as HTMLElement).style.borderColor = 'white';
        }
        goto('/chat');
      } else {
        const element = document.getElementById('loginBox');
        if (element) {
          (element as HTMLElement).style.borderColor = 'red';
        }
      }
    }
  
</script>
  
<div class="landing-page">
    <Header/> 
    <div class = "login-container" id="loginBox"> 
        <h1>Login</h1>

        <input class = "login-input" type="text" name="" id="" placeholder="Email..." bind:value={typed_email} />
        <input class = "login-input" type="password" name="" id="" placeholder="Password..." bind:value={typed_password} />
        
        
        <button on:click={loginUser} class="submit-button">Login</button>
    </div> 
    <Landing/>
    
  </div>

<style>
  .landing-page {
      display: flex;
      flex-direction: column;
  }

  .login-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    display: flex;
    font-size: 20px;

    flex-direction: column;

    background-color: white;
    z-index: 3;
    text-align: center;
    border-radius: 10px;
    padding: 40px;

    border: 4px solid white;
  }

  .login-input {
    font-size: 20px;
    padding: 10px;
    margin: 5px;
  }
  .submit-button {
    font-size: 20px;
    background-color: var(--background-colour); 
    border: 1px solid var(--border-colour);
  }

  .submit-button:hover {
    background-color: var(--border-colour);
    cursor: pointer
  }

</style>