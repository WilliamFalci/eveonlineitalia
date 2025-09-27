<template>
  <form id="contact-form" @submit="onSubmit">
      <div class="row">
          <div class="col-sm-6">
            <err-message :msg="errors.name" />
              <div class="input-grp">
                <Field name="name" v-slot="{ field }"> 
                  <input v-bind="field" name="name" type="text" placeholder="Name *">
                </Field>
              </div>
          </div>
          <div class="col-sm-6">
            <err-message :msg="errors.email" />
              <div class="input-grp">
                <Field name="email" v-slot="{ field }"> 
                  <input v-bind="field" name="email" type="email" placeholder="Email *">
                </Field>
              </div>
          </div>
      </div>
      <div class="input-grp message-grp">
         <err-message :msg="errors.message" />
          <Field name="message" v-slot="{ field }">
            <textarea v-bind="field" name="message" cols="30" rows="10" placeholder="Enter your message"></textarea>
          </Field>
      </div>
      <button type="submit" class="submit-btn">Submit Now</button>
  </form>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  message?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    message: yup.string().required().label("Message")
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});

</script>
