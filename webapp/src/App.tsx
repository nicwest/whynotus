import styled, {createGlobalStyle} from 'styled-components'
import {MainMenu} from './MainMenu'
import {PageContainer, PageContent} from './Page'

export const GlobalStyles = createGlobalStyle`
    body,html {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: monospace;
        color: #000;
        size: 16px;
    }

    a {
        color: rebeccapurple;
        text-decoration: underline;

        &:hover {
            color: black;
            text-decoration: none;
        }

        &:visited {
            color: rebeccapurple;
        }
    }
`



const FakeJobSpec = styled.div`
    background-color: #DBDBDB;
    max-width: 40rem;
    padding: 1rem;
`

const FakeTitle = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
`
const FakeSubTitle = styled.div`
    font-size: 1.2rem;
    font-weight: bold;
`

const Strike = styled.span`
        text-decoration: line-through;
`

export function App() {
    return (
      <PageContainer>
          <MainMenu />
          <PageContent>
            <h3>For potential employees:</h3>
            <p>How many times have you looked at a promising job description, but for one reason or another you didn't apply?</p>
            <p>Perhaps that reason you didn't apply wasn't as critical as you thought, or there might be a job more aligned to your preferences about to be posted.</p>
            <p>Give the gift of feedback (positive or negative!), help your industry get better at finding good people for good jobs, and perhaps that job will turn out to be a good match for you afterall!</p>
            <h3>For hiring managers:</h3>
            <p>Job descriptions are seen by upwards of 10-20 times more people than actually end up applying. </p>
            <p>The only feedback you get on this critical recruiting tool is from people that actually apply for (or maybe even get) the job.</p>
            <p>This means you don't hear from people that don't apply for your job, and you are unlikely to ever understand why they aren't applying.</p>

            <h3>How it works</h3>
            <ul>
            <li>A company advertises an open position somewhere on the internet (their own site, linkedin, job portal, etc)</li>
            <li>Potential employees see the advert, read the description, and decide that for whatever reason, they aren't going to apply</li>
            <li>They come to this website</li>
            <li>We collect the URL of the advert they saw, and why they didn't feel like the job was for them.</li>
            <li>If they are interested in talking further they can optionally provide a bit more information about themselves (contact info, demographics, CVs, etc)</li>
            <li>We collate the feedback we get and let the company or relevant hiring manager know.</li>
            <li>If there are any trends or advice we can offer we will provide that as well</li>
            <li>If both parties want to talk further we will facilitate that as well</li>
            </ul>

            <p>All feedback is private, and between the company, the prospective employee, and ourselves.</p>

            <h3>A worked example</h3>

            <p><strong>Bob</strong> is the hiring manager for the <strong>ACME Widgets corporation</strong>. He is hiring for a new <strong>Widget Production Specialist</strong>, and he writes the following job advert:</p>
            
            <FakeJobSpec>
                <FakeTitle>Widget Production Specialist at ACME Widgets Co.</FakeTitle>

                <p>At ACME co we take our widgets very seriously. What proper machine can really function without them?!</p>

                <p>We are looking for an ambitious young specialist to join our team and help us stop the world from stopping</p>


                <FakeSubTitle>Job Requirements:</FakeSubTitle>
                <ul>
                <li>3+ years working with with Widgets</li>
                <li>Masters degree in Widgets from a good university</li>
                <li>The ability to think outside of the box</li>
                <li>A passion for widgets</li>
                <li>A good understanding of the Widgets 2.1 spec</li>
                </ul>

                <FakeSubTitle>What we offer</FakeSubTitle>

                <ul>
                <li>A competitve salary ($100 a week)</li>
                <li>10 days of paid holiday</li>
                <li>Unlimited use of the widget machine after hours</li>
                <li>Beers on friday</li>
                </ul>

                <p>Click the button below to apply!</p>

                <p>If you decide this job is not for you, and can spare a minute to give us some valuable feedback, please here to go to <strong>Why Not Us</strong></p> 
            </FakeJobSpec>

            <p><strong>Bob</strong> posts the advert to the company website and linkedin and clocks off for the day</p>

            <p><strong>Jane</strong> is an experienced Widget engineer
            currently employed by a competitor to ACME co. She's always liked
            ACME Co's approach to widget design, and finds the job post while
                browsing the ACME Co website.</p>

            <p>She reads the job description, only to be disapointed that ACME
            Co is using the Widgets 2.1 spec. At her current job she's stuck
            using the inferior Widgets 1.8 spec. <strong>She doesn't have a great understanding of 2.1 specced widgets and so doesn't apply</strong></p>

            <p>She does however come to <strong>Why Not Us</strong> and leaves the following feedback</p>

            <FakeJobSpec>
            <FakeSubTitle>https://acmeco.widgets/jobs/widget-specialist</FakeSubTitle>

            <p>I was really interested in this job, sadly it's widgets 2.1 and I'm a widgets 1.8 engineer.</p>
            </FakeJobSpec>

            <p>While browsing linkedin Senior Widget Specialist <strong>Dave</strong> sees the job advert. He too is a fan of ACME Co and shares their love of widgets</p>

            <p>However Dave was working in this area before Widgets were really
            a thing, <strong>his degree is in marine biology, and at 65 he struggles to
            identify as "young" any more</strong></p>

            <p>He comes to <strong>Why Not Us</strong> and leaves the following feedback</p>

            <FakeJobSpec>
            <FakeSubTitle>https://linkedin.com/jobs/asik2j4oaow</FakeSubTitle>

            <p>I've always wanted to work at ACME Co, but sadly I started in
            1975 when Widgets were still called Gizmos, and I get the feeling you
            are looking for someone a bit fresher</p>
            </FakeJobSpec>

            <p>A friend suggests <strong>Jesse</strong> should check out the ACME Job, and sends them a link to the company website</p>

            <p>Having looked at the job description, they find it's actually for a much more
                junior position to what they are currently doing. They also see
            that the advertised salary is much lower than what they were on
            when they did a similar job</p>

            <p>They drop by <strong>Why Not Us</strong> and quickly leave the following anonymous feedback:</p>

            <FakeJobSpec>
            <FakeSubTitle>https://acmeco.widgets/jobs/widget-specialist</FakeSubTitle>

            <p>You salary is under market by $50/week, check https://job-benchmarks.com/widgets</p>
            </FakeJobSpec>

            <p><strong>Why Not Us</strong> sends <strong>Bob</strong> the following message</p>

            <FakeJobSpec>
            <FakeSubTitle>Feedback on your Widget Production Specialist role</FakeSubTitle>

            <p>Hey Bob, we have been collecting feedback on your Widget Production Specialist role</p>

            <p>3 potential employees took the time to talk to you about your job description. See the summary below:</p>

            <ul>
            <li>1 candidate suggested that the advertised salary was too low</li>
            <li>1 candidate wanted to apply but didn't feel like they met the requirements</li>
            <li>1 candidate wanted to apply but felt they were too old</li>
            </ul>

            <p>Click here to see the raw responses</p>
            </FakeJobSpec>

            <p>When <strong>Bob</strong> sees the feedback from <strong>Jane</strong> he updates the job spec and sends her the follow message</p>

            <FakeJobSpec>
            <p>Hey Jane!</p>

            <p>Thanks for your feedback on Why Not Us!</p>

            <p>Don't worry too much about Widgets 2.1, while the spec is
                different, fundamentally there aren't that many changes from
            1.8. What we are looking for is people with experience of working to a formal widget specification, and it sounds like you have that in spades</p>

            <p>I've updated the job description as follows:</p>

            <ul>
                <li>A good understanding of <strong>formal Widget specification</strong></li>
            </ul>

            <p>If you are still interested in the job, feel free to apply via the website, or just send me an email at bob@acmeco.widgets</p>
            </FakeJobSpec>

            <p>When <strong>Bob</strong> sees the feedback from <strong>Dave</strong> he updates the job spec and sends him the follow message</p>

            <FakeJobSpec>
            <p>Hey Dave!</p>

            <p>Thanks for your feedback on Why Not Us!</p>

            <p>Wow you've probably forgotten more about widgets than most of
            our current Widget Specialists. By no means are we only looking for
                young people, but I can see how my job description might have
            given you that impression, apologies!</p>

            <p>I've updated the job description as follows:</p>

            <ul>
                <li>We are looking for an ambitious <strong><Strike>young</Strike></strong> specialist to join our team and help us stop the world from stopping</li>
                <li>Masters degree in Widgets from a good university <strong>or relevant experience</strong></li>
            </ul>

            <p>If you are still interested in the job, feel free to apply via the website, or just send me an email at bob@acmeco.widgets</p>
            </FakeJobSpec>

            <p>Finally <strong>Bob</strong> also sees the anonymous feedback from <strong>Jesse</strong> and he checks the market benchmarks and finds that his job is towards the low end of the pay scale (this might explain why he's getting so few applicants!). After consulting with his boss he raises the pay to $170/week, aiming to capture some really good applicants. He asks Why Not Us to send the anonymous applicants the following message</p>

            <FakeJobSpec>
            <p>Thanks for your feedback on Why Not Us!</p>

            <p>We've checked market benchmarks and upped the compensation we are offering for this role.</p>

            <p>I've updated the job description as follows:</p>

            <ul>
                <li>A competitve salary (<strong><Strike>$100</Strike> $170</strong> a week)</li>
            </ul>

            <p>If you are still interested in the job, feel free to apply via the website, or just send me an email at bob@acmeco.widgets</p>
            </FakeJobSpec>

            <p>While <strong>Jesse</strong> wasn't interested in the job
                themselves, they do forward Bob's message onto a co-worker, as
            it now looks pretty attractive for someone at that level.</p>

            <p><strong>Bob</strong> got some really good feedback on his job
            post, and both <strong>Jane</strong> and <strong>Dave</strong> applied for a job they would have otherwise have ruled themselves out of.</p>
            
            <p>Additionally <strong>Bob</strong> was spared weeks of reading
            tea leaves, trying to understand why he was getting so few
            applicants for his job post.</p>

            <p>Over the next few days, <strong>Bob</strong> recieved quite a
            bit more feedback on his job description, was able to fix a
            number of other issues, and quickly find a brilliant new hire!</p>

          </PageContent>
      </PageContainer>
    );
}
