
function  Groups(){
    return(
        <>
        <hr/>
        <h1>Groups</h1>
        <hr/>
        <div class="b-example-divider">
        <div class="d-flex gap-5 justify-content-center">
  <div class="list-group mx-0">
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" value="" checked=""/>
      <span>
        First checkbox
        <small class="d-block text-muted">With support text underneath to add more detail</small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" value=""/>
      <span>
        Second checkbox
        <small class="d-block text-muted">Some other text goes here</small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="checkbox" value=""/>
      <span>
        Third checkbox
        <small class="d-block text-muted">And we end with another snippet of text</small>
      </span>
    </label>
  </div>

  <div class="list-group mx-0">
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios1" value="" checked=""/>
      <span>
        First radio
        <small class="d-block text-muted">With support text underneath to add more detail</small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios2" value=""/>
      <span>
        Second radio
        <small class="d-block text-muted">Some other text goes here</small>
      </span>
    </label>
    <label class="list-group-item d-flex gap-2">
      <input class="form-check-input flex-shrink-0" type="radio" name="listGroupRadios" id="listGroupRadios3" value=""/>
      <span>
        Third radio
        <small class="d-block text-muted">And we end with another snippet of text</small>
      </span>
    </label>
  </div>
</div>
</div>
        </>
    );
}
export default Groups;
