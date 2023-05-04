<template>

    





<div class="card-body px-4 py-5 px-md-5">
                            <h1 class="mb-4 mb-lg-4 text-center">
                                log in
                            </h1>
                            
                            <form class="justify-content-center " method="POST" action="">
                               
                                <!-- Email input -->

                                <div class="form-outline mb-4">
                                    <input name="email" placeholder="Enter Your Email" value=""
                                        type="email" id="form3Example3" class="form-control" required />
                                    <label class="form-label" for="form3Example3">Email address</label>
                                </div>

                                <!-- Password input -->
                                
                                <div class="form-outline mb-4">
                                    <input name="password" placeholder="******" type="password" id="form3Example4"
                                        class="form-control " required />

                                    <div class=" d-flex  " style="justify-content: space-between">
                                        <label class="form-label " for="form3Example4">password</label>
                                        <a href=""
                                            style="color:cadetblue;cursor:pointer;  text-decoration: underline; ">forget
                                            password</a>
                                    </div>

                                    
                                </div>



                                <!-- Checkbox -->
                                <div class="form-check d-flex justify-content-center mb-4">
                                    <input class="form-check-input me-2 " type="checkbox" value="" id="form2Example33"
                                        required />
                                    <p><a href="">Read all team.</a>Uderested?</p>
                                </div>

                                <!-- Submit button -->
                                <div class="container container-fluid justify-content-center">
                                    <button type="submit" class="btn btn-primary d-block px-4 container-fluid mb-4">
                                        log in
                                    </button>
                                </div>
                               

                                <!-- Register buttons -->
                                <div class="text-center">
                                    <p>or log in with:</p>
                                    <button type="button" class="btn btn-link btn-floating btn-outline-info mx-1">
                                        <i class="fab fa-twitter"></i>
                                    </button>

                                    <a href="" type="button"
                                        class="btn btn-link btn-floating btn-outline-info mx-1">
                                        <i class="fab fa-google"></i>
                                    </a>

                                    <a href="" type="button"
                                        class="btn btn-link btn-floating btn-outline-info mx-1">
                                        <i class="fab fa-facebook"></i>
                                    </a>

                                    <a href="" type="button"
                                        class="btn btn-link btn-outline-secondary mx-1">
                                        <i class="fab fa-github"></i>
                                    </a>
                                </div>
                            </form>

                        </div>



</template>