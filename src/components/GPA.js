import React, { useState, useEffect } from 'react';
import './style.css';

function GPA() {
    const [sub, setSub] = useState(3);
    const [gpas, setGpas] = useState([]);
    const [credit, setCredit] = useState([]);
    const [tResultF, setTResultF] = useState(0);

    const handleChange = (event) => {
        const selectedSub = parseInt(event.target.value);
        setSub(selectedSub);
        setGpas(Array(selectedSub).fill(''));
        setCredit(Array(selectedSub).fill(''));
        setTResultF(0);
    };

    const handleChangeGPA = (event, index) => {
        const selectedGpa = parseInt(event.target.value);
        const updatedGpas = [...gpas];
        updatedGpas[index] = selectedGpa;
        setGpas(updatedGpas);
    };

    const handleChangeCredit = (event, index) => {
        const selectedCredit = parseInt(event.target.value);
        const updatedCredit = [...credit];
        updatedCredit[index] = selectedCredit;
        setCredit(updatedCredit);
    };

    const totalResult = () => {
        let credSum = 0;
        let credXgpf = 0;

        for (let i = 0; i < gpas.length; i++) {
            const credXgpas = gpas[i] * credit[i];
            credSum += credit[i];
            credXgpf += credXgpas;
        }

        const tResult = credXgpf / credSum;
        setTResultF(tResult);
    };

    useEffect(() => {
        if (tResultF !== 0) {
            alert(tResultF);
        }
    }, [tResultF]);

    const showRes = () => {
        totalResult();

    };


    return (
        <div>
            <div class="subject subject1">

                <form>
                    <select value={sub} onChange={handleChange}>
                        <option value="3">Number of Subjects</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </form>
            </div>
            {Array.from({ length: sub }).map((_, index) => (
                <div class="gpa" key={index}>


                    <form>

                        <select value={gpas[index]} onChange={(e) => handleChangeGPA(e, index)}>
                            <option value="">Select GPA</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                    </form>

                    <form>

                        <select value={credit[index]} onChange={(e) => handleChangeCredit(e, index)}>
                            <option value="">Credit Hours</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>

                    </form>
                </div>
            ))}

            <button class="button button5" onClick={showRes}>Show Result</button>

        </div>


    );
}

export default GPA;
