<template>
    <div class="container">
        <table class="table table-bordered table-hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Contact Number</th>
                </tr>
            </thead>
            <tbody v-if="this.contacts.length > 0">
                <tr class="table-secondary" v-for="(contact, index) in this.contacts" :key="index">
                    <td scope="row">{{ contact.id }}</td>
                    <td scope="row">{{ contact.name }}</td>
                    <td scope="row">{{ contact.email }}</td>
                    <td scope="row">{{ contact.designation }}</td>
                    <td scope="row">{{ contact.contact_no }}</td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="5">..Loading..</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'ContactList',
        data () {
            return{
                contacts: []
            }
        },

        mounted () {
            this.getContacts()
        },

        methods: {
            getContacts () {
                axios.get('http://127.0.0.1:8000/api/contacts').then(response => {
                    this.contacts = response.data.contacts
                })
            }
        }
    }
</script>