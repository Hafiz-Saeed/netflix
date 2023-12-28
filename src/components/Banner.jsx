import React, { useEffect, useState } from 'react'
import './Banner.css'
import tmdbAxiosInstance from '../tmdbAxiosInstance';
import Button from 'react-bootstrap/Button';


function Banner({ fetchUrl }) {

  const [movie, setMovie] = useState({});

  const base_url = `https://image.tmdb.org/t/p/original/`;
  // console.log(fetchUrl);

  const fetchData = async () => {
    const { data } = await tmdbAxiosInstance.get(fetchUrl);
    //   console.log(data.results[Math.floor(Math.random()*data.results.length)]);

    setMovie(data.results[Math.floor(Math.random() * data.results.length)]);
  }

  // console.log(movie);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div
      style={{
        height: '620px',
        backgroundImage: `url(${base_url}/${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}>

      <div className="banner-content">
        <h1>{movie?.name}</h1>
        <p>{movie?.overview}</p>
        <Button variant="danger" style={{ borderRadius:"20px", textTransform: "uppercase",fontWeight:"500" }}><img style={{ paddingRight: "4px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAvRJREFUSEuF1V3oX3McB/DXZ2n8oxV3M83KBUWj1VwpruShJTRzYUpJEs2F1H9kE65kylPJBaFsLrQ8TJQLGXfy1LTm4b/kVlkrT5Ov8z3ne36/7zm/4+9zc07fc76fp/f78/6EbIE0e7RH/2/lUu1g4lL+a8LzMGLtqvYxP58I1h5Fm3uxSTen42Zcg0uJTaSE48SXpPfxFk6tlsSwsBKZdC1ewKZV2xW+l9yNjxZTHVUQUoYi295gT3n/CQfwHr4qLb1Msi24JXFecfwAnhonU7Vo9mlv0709OInbiHdKW6bAWiNsl7yMJWGX5JkxcWoMtuFt/N5kvLW5fKQvaVWkuByfCmskVwaHu+oHLXIWjgnrJTvxeue0BWU/lomVls8L1v5zP57G0WBzCqdGLHIPnse3uKSbjFmA/P4XsUza18VcGJ61wnEp1pNuxMH2dkWvQ8jMubcEqltXp324q0Z+zqz4eYLYTXoJd41b9DM24AL8OLrckn80kftKoFyZwsAr8Am+aLDc0p5XFfxWmLAk+WM6QF1U63QlddgcKAHOwS/4FWf3KfWJZVpmoNcRJ+dgtimkKb0KSoB2TrKtw4lC8eynSEVXxlFc2Iz+5kYevhkRZRagOh+0qCS0BZ8Xolw8r6C79UZDsVvxIPHkSF5rRg1BHorQw8RjpNcaHG8fgRw7Sa8K30kuwj9VtoWmLXty5lN2Gn7ARuzAmyMMYomU27SRuCOkVypu7heWJSsLqjmfiftoZeJY2+bwZ79javZdLXwgFangyJjoc7YWanYRt+KzTiriKlKmaiUV9VCGhySPBydSJ3bvVirbk6mfiSx2OyR5sM5sKJqreK4ev4GaVuU/EjxahivrT6bhIeJr0tpOSuIG0nacSyTSLjw7rHgodn1V/QhcjxeJDasu7G7h3Bl83GM2kKqFvTpE8QzcFFyXuvk4v1lEWTYyWzLfPxQOSv6eJtbUTh7iMVLn/1ruI2GZSfpwksctmkxqIkRNrIV18S/O/Ak1yRK/bgAAAABJRU5ErkJggg==" />Trailer</Button>{' '}
        <Button variant="light" className='btn2' > <img  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAtxJREFUSEuF1l2oZmMUB/DfmoTJpMYdo6FcUDMdUseV4ko+moTGuJhRSpNkGhdygXyEK0n5Ks0FocSF5GM0yoV83E0GmU5jhkluFZ0yNLKcvffzvu+zP06z633brWc9z1r/tf7/9exQPYGcMLT20SITpnq3xiMWTmd2bzfIkkTtv370ZmWeygSCc6Q7cCOuxKUF5EniCPkp3sfpRer9wF2A8gxKcRNeLYfOPVoE/UyO477g81l566qMEXSrT679P1GK/CvexSf4rkS6CjtwJy4utofw/LAzPQTFsT08WE1246O69/3sckOGnTJeJzcK+6UXh1WpC7RD+FA6FSwnP1YtGjGk4tw1wdfJBlyHrzrnHotsCo4lF2IP3p45VQfNyr9Avmjcg8ILMlbIJeF0Q7e6RPfjFeGotH0oiZL+OMAC19k4qUvwNnwwQz8r0UGyYc4DbaBJAUa2aDo59ACW3jxLPBLyQLJ3EMBv2CJcJv1ck3chrjlDp8jRbLkWX+JbXN0GWJQw/mqZQPP7u2S0mBzFMNJvZ5idc4H0O/4QNjfpVDqIVXITzsfqKMC0GGuNNu/N3j+b/eW91+SV4PJkCT8MODk7vutBnxyFkO1KU5bDawI8KmwbIniHvAsP47l6VzVCupKVJo+mbHhMehpvCXcPaboneDP5CVfgv25U9Kq+DoI24lnJCWzFLrw3hLoxWMmwVboneKPHxC5YFkYNhNbWbF9qxkQca4XGPx3U/nMDDhGnyGVlVNSULToY3EyWg2/KqLi+UHVe5b5ieJR4hmzYsJv4eHhapbBm9uwiDpDnYR/xcqWbmqY9KI+vtfKpYvmljOuDxPdkMxKaUXLrGsKduKh0an+Gl4Z37rpXZnBLhtdkbJlGME/oOHEv+cXU7KgCTE6fc3F7cHOGJemSIDOckA4Hn2U31P5d0Lp/3a13o03rrPcdMT5ofGXOFFnzvbxPfz2c4VOlH7NN8n/kLwgwTaVXLwAAAABJRU5ErkJggg==" /> Watch List</Button>{' '}
      </div>
    </div>
  )
}

export default Banner