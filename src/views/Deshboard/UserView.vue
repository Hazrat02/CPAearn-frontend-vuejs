<template>
    <div>
        <DeshboarLayout>

            <div class="content-wrapper" style="">
                <div class="page-header row justify-content-between mb-2">
                    <h3 class="col-12 col-md-6 page-title">
                        <span class="page-title-icon btn-gradient-primary text-white me-2 p-1">
                            <i class="bi bi-person-gear"></i>
                        </span>
                        User Manage
                    </h3>
                    <div class="col-12 col-md-6">
                        <div class="add-items d-flex justify-content-between">
                            <input type="text" class="form-control todo-list-input" placeholder="who want search..?">
                            <button class="add btn btn-gradient-primary "
                                id="add-task">Search..</button>
                        </div>
                    </div>

                </div>


                <div class="row">
                    <div class="col-12 grid-margin">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">User</h4>
                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Name</th>
                                                <th>photo</th>


                                                <th>Email</th>
                                                <th>Date Created</th>

                                                <th>Action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    1
                                                </td>
                                                <td>
                                                    test
                                                </td>
                                                <td>
                                                    <img src="assets/images/faces/face1.jpg" class="me-2" alt="image">
                                                </td>
                                                <td> Fund is not recieved </td>

                                                <td> Dec 5, 2017 </td>
                                                <td><button>delete</button> </td>
                                            </tr>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </DeshboarLayout>
    </div>
</template>
    
<script>
export default {
    data() {
        return {

        };
    },

    created() {
        this.$setLoading(false);
        this.$isSidebar();
        console.log(this.$isSidebar);
    },
};
</script>
<style>
.card-img-absolute {
    position: absolute;
    top: 0;
    right: 0%;
    height: 100%;
}
</style>
    