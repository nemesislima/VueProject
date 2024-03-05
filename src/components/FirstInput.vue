<!-- MyInput.vue -->

<template>
  <div class="container">
    <div>
      <label :for="inputId">{{ label }}</label>
      <input
        :id="inputId"
        :value="value"
        :placeholder="placeholder"
        :style="{ backgroundColor, color }"
        :disabled="disabled"
        @input="handleInput"
      />
    </div>
    <div>
      <button>Enviar para Console</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: "Input:",
    },
    placeholder: {
      type: String,
      default: "Digite aqui...",
    },
    backgroundColor: {
      type: String,
      default: "none",
    },
    color: {
      type: String,
      default: "none",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleInput(event) {
      const inputValue = event.target.value;
      this.$emit("input", inputValue);
      console.log("Input Value:", inputValue);
    },
  },
};
</script>

<style scoped>
.container {
  background-color: rgb(255, 192, 203); 
  border: 5px solid rgb(175, 76, 125);
  padding: 10px; 
  border-radius: 8px; 
  display: inline-block;
}
div {
  margin-bottom: 10px;
}
label {
  margin-right: 5px;
  color: white;
}
input {
  padding: 5px;
  border: 1px solid rgb(175, 76, 125);
  border-radius: 5px;
  height: 52px;
  width: 231px;
}
button {
  margin-top: 5px;
  padding: 5px;
  background-color: rgb(175, 76, 125);
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  height: 43px;
  width: 164px;
}
</style>
