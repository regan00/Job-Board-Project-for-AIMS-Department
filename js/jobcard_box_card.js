$(document).ready(function() {
    
    $(".cardgen").replaceWith(
        "\
    <div class='col-md-4 col-lg-4 col-sm-12 cardgen'> \
        <div class='card'> \
            <div class='row card-body'> \
                <div class='col-6'> \
                    <h4 class='card-title ml-2'>Job Title</h4> \ \
                    <h5 class='ml-2'>Company Name</h5> \
                    <h5 class='ml-2'>Job Type</h5> \
                    <h5 class='ml-2'>Location</h5> \
                </div> \
                <div class='col-6 card-img'> \
                    <img src='images/miamim.jpg' class='img-fluid img-resp'> \
                </div> \
            </div> \
\
            <div class='card-footer'> \
                <button type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModalLong'> \
                            Click To Apply \
                          </button> \
                <div class='modal fade' id='exampleModalLong' tabindex='-1' role='dialog' aria-labelledby='exampleModalLongTitle' aria-hidden='true'> \
                    <div class='modal-dialog' role='document'> \
                        <div class='modal-content'> \
                            <div class='modal-header'> \
                                <h5 class='modal-title' id='exampleModalLongTitle'>Job Category</h5> \
                                <button type='button' class='close' data-dismiss='modal' aria-label='Close'> \
                                    <span aria-hidden='true'>&times;</span> \
                                </button> \
                            </div> \
                            <div class='modal-body'> \
                                <h2>Job Title</h2> \
                                <h4>Company Name</h4> \
                                <h5>Job Type</h5> \
                                <h5>Location</h5> \
                                <br> \
                                <h6>Job Description:</h6> \
 \
                                <p>[Enter Text Here] \
                                </p> \
                                <br> \
                                <h5>How to Apply:</h5> \
\
                            </div> \
                            <div class='modal-footer'> \
                                <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button> \
                                <button type='button' class='btn btn-primary'>Send To myMiami Email</button> \
                            </div> \
                        </div> \
                    </div> \
                </div> \
            </div> \
        </div> \
        <div margin: cardgen style='height:10px; width:10px;'>\
        </div>\
    </div>\
    <aside id='anotherjob'></aside> "
    
    );
  

  });