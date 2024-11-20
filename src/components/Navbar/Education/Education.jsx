import styled from "styled-components";
import EducationData from "./EducationData";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const Role = styled.div`
  margin-bottom: 4px;
  color: ${({ theme }) => `${theme.text_primary}99`};
  font-size: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  align-items: center;
`;

const TimelineStyles = {
  connector: {
    background: "#6289b1",
  },
  dot: {
    background: "white",
    border: "2px solid #6289b1",
    color: "#fff",
  },
  content: {
    background: "#191924",
    color: "rgb(152, 155, 161)",
    borderRadius: "20px",
    padding: "20px",
    boxShadow: "white 0px 4px 24px",
    border: "#6289b1 3px solid",
  },
};

function Education() {
  return (
    <div id="education">
      <h2
        style={{
          textAlign: "center",
          margin: "25px 0",
          color: "white",
          fontSize: "35px",
        }}
      >
        Education
      </h2>
      <p
        style={{
          textAlign: "center",
          margin: "0 0 25px",
          color: "rgb(152, 155, 161)",
          fontSize: "18px",
        }}
      >
        Explore a detailed overview of my academic journey, showcasing key
        milestones that define my educational background.
      </p>

      <Timeline position="alternate">
        {EducationData.map((data) => (
          <TimelineItem key={data.id}>
            <TimelineSeparator>
              <TimelineDot style={TimelineStyles.dot}>
                <img
                  src={data.img}
                  alt={`${data.school} logo`}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                  }}
                />
              </TimelineDot>
              <TimelineConnector style={TimelineStyles.connector} />
            </TimelineSeparator>
            <TimelineContent>
              <div style={TimelineStyles.content}>
                <Main>
                  <img
                    src={data.img}
                    alt={`${data.school} logo`}
                    style={{
                      width: "60px",
                      height: "60px",
                      borderRadius: "30px",
                    }}
                  />
                  <Role>
                    <h4 style={{ fontSize: "12px" }}>{data.school}</h4>
                    <p style={{ fontSize: "12px" }}>Date: {data.date}</p>
                  </Role>
                </Main>
                <p style={{ fontSize: "14px" }}>{data.desc}</p>
                <p style={{ fontSize: "14px" }}>{data.degree}</p>
              </div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Education;
