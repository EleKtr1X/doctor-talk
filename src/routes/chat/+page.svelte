<script lang="ts">
  import Chat from '$lib/components/chat.svelte';
  import PatientDetails from '$lib/components/patientDetails.svelte';
  import PatientList from '$lib/components/patientlist.svelte';
  import data from '$lib/database/data.json';
  
  import { isDoctor } from '../../stores';
  import { personObject } from '../../stores';
  import { selectedPerson } from '../../stores';

  let currentPatient: any;
  if ($isDoctor) {
    // @ts-ignore
    currentPatient = $personObject.patients[0];
    $selectedPerson = currentPatient;
  } else {
    currentPatient = $personObject; 
    // @ts-ignore
    $selectedPerson = data.filter(x => x.patients.includes($personObject))[0];
  }
  console.log($selectedPerson)


  function changePatient(patient: { id: number; name: string; email: string; password: string; prescription: { name: string; amountPrescribed: string; }[]; notes: string[]; }) {
    if ($isDoctor) {
      console.log(patient)
      currentPatient = patient;
      $selectedPerson = currentPatient;
    }
  }
</script>

<div class="main-wrapper">
  <div class = "patient-list-container">
    <PatientList selectPatient={(patient: any) => changePatient(patient)} /> 
  </div>
  <div class="chat-wrapper">
    <Chat />
  </div>
  <div class = "patient-detail-container">
    <PatientDetails currentPatient={currentPatient} />
  </div>
</div>

<style>
.main-wrapper {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  margin: 0;
}
.patient-list-container, .patient-detail-container {
  flex: 1 1 0;
  margin: 0;
}
.chat-wrapper {
  flex: 2 2 0;
  margin: 0;
}
:global(:root) {
      --background-colour: #bac6f4;
      --background-hover-colour: #ddd;
      --border-colour: #8299ed;
      --accent-colour: #a0b1ef;
      --text-colour: #000;
      --secondary-text-colour: #ccc;
    } 
</style>