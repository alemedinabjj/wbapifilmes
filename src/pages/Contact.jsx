import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import emailjs from '@emailjs/browser'; 
import React, { useRef } from 'react';

export function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log("foi")
    emailjs
      .sendForm(
        "service_r0o8v59",
        "template_zmzm4dj",
        form.current,
        "MgtiWpvmlm2X808Dd"
      )
      .then(
        (result) => {
          alert("mensagem enviada");
        },
        (error) => {
          alert("algum erro");
        }
      );

    e.target.reset();
  };

  return (
    <main className="dark:bg-slate-800 min-h-screen ">
      <section className="flex items-center justify-center">
        <Box
        ref={form}
        onSubmit={sendEmail}
          component="form"
          className="flex flex-col p-5"
          sx={{
            "& > :not(style)": { m: 1, width: "35ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="name" variant="filled" className="dark:placeholder-white" />
          <TextField id="filled-basic" label="email" variant="filled" />
          <TextField
            id="outlined-multiline-static"
            label="message"
            multiline
            rows={9}
            placeholder="Digite sua Mensagem."
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </Box>
      </section>
    </main>
  );
}
