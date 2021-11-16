
import telephone from '../images/contact/telephone.svg';
import Fb from '../images/contact/fb.svg';
import In from '../images/contact/in.svg';
import Twitter from '../images/contact/twitter.svg';

// variables

var projects, views, sub, like, my_int, indicater, counterContainer;
var p = 0;
var v = 0;
var s = 0;
var l = 0;



<footer className='bottom-footer px-4 pt-4 mt-5'>
<div className='row d-flex justify-content-between'>
  <div className='aboutFoot col-12 col-md-4'>
    <h3 className='my-2 foot-title'>Ryde CS</h3>
    <p className='para mt-3 mt-lg-5 '>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div className='socialmediaIcon'>
      <ul className='d-flex '>
        <img
          className='img-fluid mr-2'
          width='40px'
          alt='icons'
          src={Fb}
        ></img>
        <img
          className='img-fluid mr-2'
          width='40px'
          alt='icons'
          src={Twitter}
        ></img>
        <img
          className='img-fluid mr-2'
          width='40px'
          alt='icons'
          src={In}
        ></img>
      </ul>
    </div>
  </div>
  <div className='referLink col-12 col-md-6 d-flex justify-content-between mx-md-auto '>
    <div className='linkOne'>
      <h4 className='my-2'>Products</h4>
      <ul>
        <li className='my-2'>Product 1</li>
        <li className='my-2'>Product 2</li>
        <li className='my-2'>Product 3</li>
        <li className='my-2'>Product 4</li>
      </ul>
    </div>
    <div className='linkTwo'>
      <h4 className='my-2'>Services</h4>
      <ul>
        <li className='my-2'>Services 1</li>
        <li className='my-2'>Services 2</li>
        <li className='my-2'>Services 3</li>
        <li className='my-2'>Services 4</li>
      </ul>
    </div>
    <div className='linkThree'>
      <h4 className='my-2'>Resources</h4>
      <ul>
        <li className='my-2'>News</li>
        <li className='my-2'>Blog</li>
        <li className='my-2'>Video</li>
        <li className='my-2'>FAQs</li>
      </ul>
    </div>
  </div>
</div>
</footer>
<div
className='col-12  pt-4 copyWriteContent d-flex flex-column d-md-flex flex-md-row-reverse justify-content-between'
style={{ backgroundColor: 'rgba(235,235,235,1)' }}
>
<div className='col-12 mx-auto col-md-5 d-flex justify-content-center'>
  <p className='mx-auto'>Privacy Policy</p>
  <p className='mx-auto'>Terms of Service</p>
</div>
<div className='col-12 text-center text-md-left col-md-6'>
  <p className='mx-auto'>&copy;2020 RydeCS.All Rights Reserved</p>
</div>
</div>
</div>


const counting = () => {
    projects = document.getElementById('Projects');
    views = document.getElementById('views');
    sub = document.getElementById('sub');
    like = document.getElementById('like');
    if (p >= 0) {
      p++;
      projects.innerHTML = p;
    }
    if (v >= 0) {
      v++;
      views.innerHTML = v;
    }
    if (s >= 0) {
      s++;
      sub.innerHTML = s;
    }
    if (l >= 0) {
      l++;
      like.innerHTML = l;
    }
  
    indicater = window.pageYOffset;
    // console.log(indicater);
    if (indicater < 50) {
      p = 0;
      v = 0;
      s = 0;
      l = 0;
      projects.innerHTML = p;
      views.innerHTML = v;
      sub.innerHTML = s;
      like.innerHTML = l;
      clearInterval(my_int);
    }
    stop();
    my_int = setInterval(counting, 5);
  };
  const stop = () => {
    if (p >= 2) {
      my_int = setInterval(counting, 1);
    }
    if (p >= 50) {
      p = 50;
    }
    if (v >= 2000) {
      v = 2000;
    }
    if (s >= 90) {
      s = 90;
    }
    if (l >= 1000) {
      l = 1000;
    }
    projects.innerHTML = p + '+';
    views.innerHTML = v + '+';
    sub.innerHTML = s + '+';
    like.innerHTML = l + '+';
  };
  if (projects) {
    window.addEventListener('scroll', counting);
  }