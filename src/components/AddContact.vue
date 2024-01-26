<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h3>Add Contact</h3>
            </div>

            <div class="card-body">

                <div class="alert alert-danger rounded p-0" v-if="Object.keys(this.errorList).length > 0">
                    <ul>
                        <li v-for="(error, index) in this.errorList" :key="index">
                            {{ error[0] }}
                        </li>
                    </ul>
                </div>
                
                <form action="#" method="POST">
                    <div class="from-group">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="name" autocomplete="off" v-model="model.contact.name">
                            <label for="name">Name</label>
                        </div>
                    </div>

                    <div class="from-group">
                        <div class="form-floating mb-3">
                            <input type="email" class="form-control" id="email" autocomplete="off" v-model="model.contact.email">
                            <label for="email">Email</label>
                        </div>
                    </div>

                    <div class="from-group">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="designation" autocomplete="off" v-model="model.contact.designation">
                            <label for="designation">Designation</label>
                        </div>
                    </div>

                    <div class="from-group">
                        <div class="form-floating mb-3">
                            <input type="text" class="form-control" id="contact_no" autocomplete="off" v-model="model.contact.contact_no">
                            <label for="contact_no">Contact Number</label>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="button" @click="saveContact" class="btn btn-primary rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'AddContact',
        data () {
            return {
                errorList: '',
                model: {
                    contact: {
                        name        : '',
                        email       : '',
                        designation : '',
                        contact_no  : ''
                    }
                }
            }
        },

        methods: {
            saveContact() {
                var $this = this

                axios.post('http://127.0.0.1:8000/api/contacts', this.model.contact).then(response => {
                    console.log(response.data)
                    this.model.contact = {
                        name        : '',
                        email       : '',
                        designation : '',
                        contact_no  : ''
                    }
                }).catch(function(error) {
                    if(error.response) {
                        if(error.response.status == 422) {
                            $this.errorList = error.response.data.errors
                        }
                    }
                })
            }
        }
    }
</script>