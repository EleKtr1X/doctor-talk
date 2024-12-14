<script lang="ts">
  import data from '$lib/database/data.json';

  let selectedPatient = null; 
  let { selectPatient } = $props();
  import { isDoctor } from '../../stores';
  import { personObject } from '../../stores';

  // @ts-ignore
  let people = $isDoctor ? $personObject.patients : data;
</script>

<div class="sidebar-wrapper">
  <div class="sidebar">
    <div class="sidebar-title">
      <i class="fas fa-book"></i>
      {#if $isDoctor}
        Patients
      {:else}
        Doctor
      {/if}
    </div>
    <div class="sidebar-content">
      <!-- Get all patients and list them on the side -->
      {#each people as person}
        <button class="patient" value={person.id} onclick={() => selectPatient(person)}>{person.name}</button>
      {/each}
    </div>
  </div>
</div>

<style>
  .sidebar-wrapper {
    height: 100vh; 
    background-color: var(--background-colour);
    display: flex;
    flex-direction: column;
    width: 100%;
    flex: 1 1 0;
  }

  .sidebar {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    margin: 0;
  }

  .sidebar-title {
    text-align: center;
    font-size: 20px;
    color: white;
    background-color: var(--accent-colour);
    width: 100%;
    padding: 15px 0;
    font-weight: bold;
  }

  .sidebar-content {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: var(--background-colour);
    color: var(--text-colour);

    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .patient {
   
    font-size: 16px;
    color: white;
    background-color: var(--accent-colour);
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    text-align: center;
    width: 200px;
    border: 2px solid var(--border-colour);
  }

  .patient:hover {
    background-color: var(--border-colour);
    cursor: pointer;
  }
</style>
