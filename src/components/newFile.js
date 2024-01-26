import axios from 'axios';

export default (await import('vue')).defineComponent({
name: 'ContactList',
data: () => {
contacts: Array;
},

created: () => {
},

methods: {
async getContacts() {
let url = 'http://127.0.0.1:8000/api/contats';

await axios.get(url).then(response => {
this.contacts = response.data;

console.log(this.contacts);
});
}
},
});
