var boxParts = [0, 0, 0, 0];

// function startedDragging() {
//     console.log(this);
// }

function extractPartID (someElement) {
    var id = someElement.attr('id');
    if (id == "part1") {
        return 1;
    }

    if (id == "part2") {
        return 2;
    }

    if (id == "part3") {
        return 3;
    }

    if (id == "part4") {
        return 4;
    }
}

function stoppedDragging(e) {
    var self = $(this);
    console.log(e.pageX, e.pageY);

    var partID = extractPartID(self);

    for (var i = 0; i < boxParts.length; i = i + 1) {
        if (boxParts[i]==partID) {
            boxParts[i] = 0;
        }
    }

    if (e.pageX < 420 && e.pageY < 280) {
        console.log("box1");
        if (boxParts[0] == 0) {
            self.offset({
                top: 100,
                left: 100
            });
            boxParts[0] = partID;
        }
    } else if (e.pageX > 420 && e.pageY < 280 && e.pageX < 740) {
        console.log("box2");
        if (boxParts[1] == 0) {
            $(self).offset({
                top: 100,
                left: 420
            });
            boxParts[1] = partID;
        }
    } else if (e.pageX < 420 && e.pageY > 280 && e.pageY < 460) {
        console.log("box3");
        if (boxParts[2] == 0) {
            $(self).offset({
                top: 280,
                left: 100
            });
            boxParts[2] = partID;
        }
    } else if (e.pageX > 420 && e.pageY > 280 && e.pageX < 740 && e.pageY < 460) {
        console.log("box4");
        if (boxParts[3] == 0) {
            $(self).offset({
                top: 280,
                left: 420
            });
            boxParts[3] = partID;
        }
    }

    var solved = true;
    var allFieldsFull = true;
    for (var i = 0; i < 4; i++) {
        if (boxParts[i] != i + 1) {
            solved = false;
        }
        if (boxParts[i] == 0) {
            allFieldsFull = false;
        }
    }
    if (solved) {
        alert("You're smart!");
    } else if (allFieldsFull) {
        alert("You're stupid.");
    }

    console.log(boxParts);
    // 1. Check if drag stops over field.
    //    if not: return
    // 2. Check if that field is empty.
    //    if not: return
    // 3. Snap the part into the empty field.
    // 4. Record that the field is not empty anymore.
}



$(function() {
    $("#part1").draggable({
        stop: stoppedDragging
    });
    $("#part2").draggable({
        stop: stoppedDragging
    });
    $("#part3").draggable({
        stop: stoppedDragging
    });
    $("#part4").draggable({
        stop: stoppedDragging
    });
});

function randomNum(t, l) {
    return {top: ((Math.random()*t) + 1).toFixed(), left: ((Math.random()*l) + 1).toFixed()};
}

// var maxWidth = $(document).width()-640;

$(document).ready(function() {
    //var boxWidth = $("#part1"). ;
    var boxWidth = 320;
    var maxWidth = $(document).width()-boxWidth;
    var boxHeight = 180;
    // var maxWidth = window.innerWidth - boxWidth;
    // var maxHeight = window.innerHeight - boxHeight;
    var maxHeight = $(document).height()-boxHeight;
    $("#part1").offset(randomNum(maxHeight, maxWidth));
    $("#part2").offset(randomNum(maxHeight, maxWidth));
    $("#part3").offset(randomNum(maxHeight, maxWidth));
    $("#part4").offset(randomNum(maxHeight, maxWidth));
});