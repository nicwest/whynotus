import {useState} from 'react';
import styled from 'styled-components';
import { Form } from "react-router-dom";
import {MainMenu} from '../../MainMenu'
import {PageContainer, PageContent} from '../../Page'

const FeedbackForm = styled(Form)`
max-width: 40rem;
display: flex;
flex-direction: column;
`

const Input = styled.input`
font-size: 1.2rem;
font-family: monospace;
padding: 0.4rem;
`

const Select = styled.select`
font-size: 1.2rem;
font-family: monospace;
padding: 0.4rem;
`

const Feedback = styled.textarea`
font-size: 1.2rem;
font-family: monospace;
padding: 0.4rem;
min-height: 20rem;
`

const SubmitButton = styled.button`
font-size: 1.2rem;
font-family: monospace;
padding: 0.4rem;
`

const Label = styled.label`
font-size: 1.4rem;
font-weight: bold;
font-family: monospace;
padding: 0.4rem 0;
display: flex;
flex-direction: column;
`

export function Say() {

    const [url, setURL] = useState('');
    const [feedback, setFeedback] = useState('');
    const [anon, setAnon] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [age, setAge] = useState(18);
    const [ethnicity, setEthnicity] = useState('');


    return (
        <PageContainer>
            <MainMenu />
            <PageContent>
                <FeedbackForm method="post">
                    <Label>
                        URL
                        <Input type="text" value={url} onChange={(e) => setURL(e.target.value)} />
                    </Label>
                    <Label>
                        Feedback
                        <Feedback value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                    </Label>
                    <Label>
                        Send feedback anonymously?
                        <input type="checkbox" checked={anon} onChange={() => setAnon(!anon)}/>
                    </Label>
                    {anon ? <>

                    <Label>
                        Name
                        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                    </Label>
                    <Label>
                        Email
                        <Input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Label>
                        <Label>
                            Age
                            <Input type="number" value={String(age)} onChange={(e) => setAge(Number(e.target.value))} />
                        </Label>
                        <Label>
                            Gender
                            <Select onChange={(e) => setGender(e.target.value)} >
                                <option value="Prefer not to say">Prefer not to say</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                                <option value="Meatpopsicle">Meatpopsicle</option>
                            </Select>
                        </Label>
                        <Label>
                            Enthnicity
                            <Select onChange={(e) => setEthnicity(e.target.value)} >
                                <option value="Prefer not to say">Prefer not to say</option>
                                <option value="Asian">Asian</option>
                                <option value="Arab">Arab</option>
                                <option value="Black">Black</option>
                                <option value="Mixed">Mixed</option>
                                <option value="White">White</option>
                                <option value="Other">Other</option>
                                <option value="Klingon">Klingon</option>
                            </Select>
                        </Label>
                        <Label>
                            Education
                            <Select onChange={(e) => setEthnicity(e.target.value)} >
                                <option value="Prefer not to say">Prefer not to say</option>
                                <option value="University/College">University/College</option>
                                <option value="Apprenticeship">Apprenticeship</option>
                                <option value="Vocational">Vocational</option>
                                <option value="High School">High School</option>
                                <option value="General">General</option>
                                <option value="Other">Other</option>
                                <option value="School of Hardknocks">School of Hard Knocks</option>
                            </Select>
                        </Label>

                    </> : null}
                    <SubmitButton type="submit">Send It!</SubmitButton>
                </FeedbackForm>
            </PageContent>
        </PageContainer>
    )
}
