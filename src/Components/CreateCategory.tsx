import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CREATE_CATEGORY } from '../Graphql/Mutations'
import { useMutation } from '@apollo/client'

const initialFormValues = {
    newCategory: "",
    formSubmitted: false,
    success: false
}


export default function CreateCategory() {
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);

    const [createCategory, {error}] = useMutation(CREATE_CATEGORY)

    const style = {
        form: {
            flex: 1,
            flexDirection: 'row' as "row", 
            alignItems:'center', 
            justifyContent:'center'
        },
        formItem: {
            marginBottom: "20px",
            width: "80%",
            textAlign: "left" as "left",
            background: "#ffffff"
        }
    }

    const validate: any = (fieldValues = values) => {
        let temp: any = { ...errors }
  
        if ("newCategory" in fieldValues) {
          temp.newCategory = fieldValues.newCategory ? "" : "This field is required."
        }
  
        setErrors({
          ...temp
        });
  
        if (fieldValues == values)
              return Object.values(temp).every(x => x == "")
    }

    const handleInputValue = (event: any) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value
        });
        // setNewCategory(event.target.value)
        validate({ [name]: value });
    }

    const resetForm = () => {
        setValues(initialFormValues);
        setErrors({})
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if (validate()) {
            createCategory({
                variables: {
                    category: values.newCategory
              },
            })
            alert("You've posted a new category!")
            resetForm()
        }  
    }
    
    return(
        <form style={style.form} onSubmit={handleFormSubmit}>
                <br /><br />
                <Box style={{font: "bold", marginBottom: "20px"}}>
                    <Typography>Create New Category</Typography>
                </Box>
                <TextField 
                    onBlur={handleInputValue} 
                    onChange={handleInputValue}
                    label="New Category" 
                    name= "newCategory"
                    value={values.newCategory}
                    fullWidth 
                    style={style.formItem} 
                    {...(errors["newCategory"] && { error: true, helperText: errors["newCategory"] })}
                />
                <Button 
                    variant="contained" 
                    type="submit"
                >
                    Submit Category
                </Button>
            </form>
    )
}