export default function logout() {
    localStorage.clear();
    this.$router.push('/login');
            this.$notify({
              title: "message",
              text: 'Your account logout!',
              type: "success",
            });
    
  }
// export default function logout() {
//     // localStorage.clear();
//     // Perform any additional logout logic
//     return 'bal'
//   }
  

 
  