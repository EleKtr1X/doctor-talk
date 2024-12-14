<script lang="ts">
  import io from 'socket.io-client'
	import { onMount } from 'svelte';
  import data from '$lib/database/data.json';
  const socket = io()
  import { personObject } from '../../stores';
  import { selectedPerson } from '../../stores';
	import { goto } from '$app/navigation';

  let message = '';
  let messages: Record<number, Array<string>> = {};

  async function sendMessage() {
    // console.log($selectedPerson)
    console.log($selectedPerson.id);
    if (message.trim() == "") {
      goto('/');
      return;
    }

    if (JSON.stringify($personObject) == '{}') {
      return;
    } else {
      // @ts-ignore
      socket.emit('messageCreate', `${$personObject.name}: ${message}`, $personObject.id, $selectedPerson.id)
      message = "";
    }
    

    // await fetch('/api/chat', { method: 'POST', body: message })
  }
  
  onMount(() => {
    socket.on('message', (message, id, to) => {
      // @ts-ignore
      console.log('m', messages, id, to);
      if (to == $selectedPerson.id && id == $personObject.id || id == $selectedPerson.id && to == $personObject.id) {
        if (messages[$selectedPerson.id]) {
          messages[$selectedPerson.id] = [...messages[$selectedPerson.id], message];
        } else {
          messages[$selectedPerson.id] = [message];
        }
      }
    })
  })
</script>

<div class="main-wrapper">
  <div class="chat-wrapper">
    {#if messages[$selectedPerson.id]}
      {#each messages[$selectedPerson.id] as message}
        <div class="message">
          {message}
        </div>
      {/each}
    {/if}
  </div>
  <div class="send-wrapper">
    <input class = "type-box" type="text" name="" id="" placeholder="Message..." bind:value={message} />
    <button on:click={sendMessage} class="send-button">Send</button>
  </div>
</div>

<style>
  .message {
    padding: 10px;
  }

  .chat-wrapper {
    display: flex;
    flex: 10 10 0;
    flex-direction: column;
    overflow-y: scroll;
  }

  .send-wrapper {
    margin-top: auto;
    display: flex;
    flex: 1 1 0;
  }

  .main-wrapper {
    width: 100%;
    height: 100%;
    font-size: 20px;
    flex: 2 2 0;
    display: flex;
    flex-direction: column;
    justify-content: bottom;
  }
  .type-box {
    font-size: 20px;
    width: 100%;
    padding: 15px;
  }
  .send-button {
    font-size: 20px;
    padding: 15px;
    background-color: var(--accent-colour);
    border: 1px solid var(--border-colour)
  }
</style>