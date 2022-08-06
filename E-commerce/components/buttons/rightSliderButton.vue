<template>
    <div>
        <button class="right-control-hero">
            <svg fill="#424750" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
            </svg>
        </button>
    </div>
</template>

<script>
    export default {

    }   
</script>

<style lang="scss">
    .right-control-hero{
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      position: absolute;
      right: 2%;
      bottom: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #e0e0e2;
      outline: none;
      z-index: 2222;
    }

    @media only screen and (max-width: 992px){
        .right-control-hero{
            display: none;
        }
    }
</style>