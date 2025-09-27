<template>
 <form class="comment-form" @submit="onSubmit">
    <p class="comment-notes">Email address will not be published. Required fields are marked *</p>
    <div class="row">
        <div class="col-sm-6">
            <err-message :msg="errors.name" />
            <div class="form-grp">
                <Field name="name" v-slot="{ field }"> 
                  <input v-bind="field" name="name" type="text" placeholder="Name *">
                </Field>
            </div>
        </div>
        <div class="col-sm-6">
            <err-message :msg="errors.email" />
            <div class="form-grp">
                <Field name="email" v-slot="{ field }"> 
                  <input v-bind="field" name="email" type="email" placeholder="Email *">
                </Field>
            </div>
        </div>
    </div>
    <div class="form-grp">
        <err-message :msg="errors.comment" />
        <Field name="comment" v-slot="{ field }">
         <textarea v-bind="field" name="comment" placeholder="Comment *"></textarea>
        </Field>
    </div>
    <button type="submit">Post Comment</button>
</form>
</template>

<script setup lang="ts">
import { useForm,Field } from 'vee-validate';
import * as yup from 'yup';

interface IFormValues {
  name?: string | null;
  email?: string | null;
  comment?: string | null;
}
const { errors, handleSubmit,resetForm } = useForm<IFormValues>({
  validationSchema: yup.object({
    name: yup.string().required().label("Name"),
    email: yup.string().required().email().label("Email"),
    comment: yup.string().required().label("Comment")
  }),
});

const onSubmit = handleSubmit(values => {
  alert(JSON.stringify(values, null, 2));
  resetForm()
});
</script>
