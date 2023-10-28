import Image from 'next/image';
import big_banner from '../../../../public/images/big_banner.png';
import ParallaxText from '@/components/Common/ParallaxImages';
import companies_image from '../../../../public/images/companies.png';
import { Wrapper, Inner, ImageContainer, ParallaxImages } from './styles';

const Featured = () => {
  return (
    <Wrapper>
      <Inner>
        <ImageContainer>
          <Image src={big_banner} alt="big_banner" fill />
        </ImageContainer>
        <h2>Featured and Seen in</h2>
        <ParallaxImages>
          <ParallaxText baseVelocity={-4}>
            <Image src={companies_image} alt="comapanies" />
          </ParallaxText>
        </ParallaxImages>
      </Inner>
    </Wrapper>
  );
};

export default Featured;
