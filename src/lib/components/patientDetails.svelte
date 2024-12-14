<script lang="ts">
  export let currentPatient: { id: number; name: string; prescription: { name: string; amountPrescribed: string; }[]; notes: string[]; }
</script> 


<div class= "main-container">
  <div class = "patient-name">
    <h1><strong>{currentPatient.name}</strong></h1>
  </div>
  <div class = "patient-information">
    <h3>Prescriptions</h3>
    <ul>
      {#each currentPatient.prescription as p}
        <div class = "prescription-element">
          <li>{p.name} - {p.amountPrescribed}</li>
        </div>
      {/each}
    </ul>
    <h3>Notes</h3>
    <p>{currentPatient.notes}</p>
  </div>
</div>  


<style>

h1 {
  margin: 0;
}

.main-container {
  width: 100%;
  height: 100%;
  color: white;
  background-color: var(--background-colour);
  text-align: center;
  flex: 1 1 0;
  margin: 0;
}

.patient-name {
    text-align: center;
    font-size: 10px;
    color: white;
    background-color: var(--accent-colour);
    width: 100%;
    padding: 15px 0;
    font-weight: bold;
  }

.patient-information {
  font-size: 20px;
  text-align: left;
  padding-left: 15px;
  background-color: var(--background-colour)
}

.prescription-element {
  display: flex;
  justify-content: center;
  background-color: var(--accent-colour);
  border-radius: 5%;
  border: 2px solid var(--border-colour);
  width: 80%;
  margin-bottom: 15px;
}

li {
  list-style: none;
  margin: 10px;
}
</style>