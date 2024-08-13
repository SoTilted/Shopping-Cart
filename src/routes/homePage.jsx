import {
  H1,
  Banner,
  BannerPhoto,
  MainContent,
  PageHeader,
  NavLink,
  PageInfo,
  Box,
  BoxGroup,
  Icon,
} from "../styled-tags";
import {
  mdiCurrencyUsd,
  mdiClockFast,
  mdiAccountHeart,
  mdiBriefcase,
} from "@mdi/js";
import PropTypes from "prop-types";

H1.propTypes = {
  underscore: PropTypes.bool,
  primary: PropTypes.bool,
};

NavLink.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default function HomePage() {
  return (
    <>
      <MainContent shop={false}>
        <Banner>
          <PageHeader>
            <H1 primary={true}>
              You want to be your <u>best</u> version?
            </H1>
            <p>Then we are inevitable.</p>
            <NavLink secondary={true} to={"shop"}>
              Shop now!
            </NavLink>
          </PageHeader>
          <BannerPhoto></BannerPhoto>
        </Banner>
        <PageInfo>
          <H1 underscore={true}>How are we different?</H1>
          <BoxGroup>
            <Box>
              <div>
                <Icon path={mdiCurrencyUsd} size={1.5} color={"green"} />
                <Icon path={mdiCurrencyUsd} size={1.5} color={"green"} />
                <Icon path={mdiCurrencyUsd} size={1.5} color={"green"} />
              </div>
              <h2>Invaluable.</h2>
              <p>
                Fantastic prices for the quality of our products that even Gigi
                Hadid could not believe it.
              </p>
            </Box>
            <Box>
              <div>
                <Icon path={mdiAccountHeart} color={"red"} size={1.5} />
              </div>
              <h2>Individuality.</h2>
              <p>
                No two pieces are the same, we also do custom requests to
                accomodate your needs to the fullest!
              </p>
            </Box>
            <Box>
              <div>
                <Icon path={mdiBriefcase} color={"brown"} size={1.5} />
              </div>
              <h2>Professionalism.</h2>
              <p>
                Our employees are the cream of the crop, always striving for
                perfection and offering the best service.
              </p>
            </Box>
            <Box>
              <div>
                <Icon path={mdiClockFast} color={"gold"} size={1.5} />
              </div>
              <h2>On Time.</h2>
              <p>
                As valuable as{" "}
                <span style={{ color: "#ffb139" }}>
                  <b>gold</b>
                </span>
                . We respect our customers time and we pride ourselves for never
                delaying.
              </p>
            </Box>
          </BoxGroup>
        </PageInfo>
      </MainContent>
    </>
  );
}
