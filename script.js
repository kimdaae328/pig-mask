$(document).ready(function () {
    const $mask = $('.mask');
    const $backgroundImage = $('.background-image');
    const containerWidth = $('.container').width();
    const containerHeight = $('.container').height();
    const maskDiameter = $mask.width();
  
    function moveMask() {
        // 왼쪽 위 -> 오른쪽 위 -> 오른쪽 아래 -> 왼쪽 아래
        $mask.css({ top: 0, left: 0 }).show();
    
        $mask.animate({ left: containerWidth - maskDiameter }, 2000, function () {
            $mask.animate({ top: containerHeight - maskDiameter }, 2000, function () {
                $mask.animate({ left: 0 }, 2000, function () {
                    $mask.animate({ top: 0 }, 2000, function () {
                        moveMask();
                    });
                });
            });
        });
    }
  
    moveMask();
});
