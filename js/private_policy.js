$(function () {
    $('#acepted-policy').click(function () {
        if ($(this).is(':checked')) {
            $('#form-submit').removeAttr('disabled');
        } else {
            $('#form-submit').attr('disabled', 'disabled');
        }
    });
});