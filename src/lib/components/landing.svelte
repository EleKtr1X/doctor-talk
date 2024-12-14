<!--

<script>
  import Image from '$lib/doctor_image.png'
</script>


<img alt="bicture of doctors" class="bg" src={Image}/>

<style>
  .buttons {
    position: flex;
    justify-content: space-around;
    z-index: 3;

  }
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    filter: brightness(50%);
  }
</style> -->

<script>
  import Image from '$lib/doctor_image.png';
</script>

<img alt="doctors" class="bg" src={Image} />

<style>
  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
    filter: brightness(50%);
  }    
</style>