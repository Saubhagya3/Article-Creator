import { Autocomplete, Button, MenuItem, TextField } from '@mui/material'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Box from '@mui/material/Box';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Typography from '@mui/material/Typography';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react'
import { useMutation } from '@apollo/client'
import { CREATE_ARTICLE } from '../Graphql/Mutations'
import { GET_ALL_CATEGORIES } from '../Graphql/Queries'
import { useQuery } from '@apollo/client'
import { countries } from './Countries'


const initialFormValues = {
    title: "",
    author: "",
    country: "",
    category: "",
    content: "",
    date: new Date(),
    formSubmitted: false,
    success: false
}

export default function CreatePost() {
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

    const [newDate, setNewDate] = useState<Date | null>(new Date());
    const [values, setValues] = useState(initialFormValues);
    const [errors, setErrors] = useState({} as any);
    
    const [createArticle, {error}] = useMutation(CREATE_ARTICLE)
    const { data } = useQuery(GET_ALL_CATEGORIES)

    const validate: any = (fieldValues = values) => {
      let temp: any = { ...errors }

      if ("title" in fieldValues) {
        temp.title = fieldValues.title ? "" : "This field is required."
      }

      if ("author" in fieldValues) {
        temp.author = fieldValues.author ? "" : "This field is required."
      }

      if ("country" in fieldValues) {
        temp.country = fieldValues.country ? "" : "This field is required."
      }

      if ("category" in fieldValues) {
        temp.category = fieldValues.category ? "" : "This field is required."
      }

      if ("content" in fieldValues) {
        temp.content = fieldValues.content ? "" : "This field is required."
      }

      if ("date" in fieldValues) {
        temp.date = fieldValues.date ? "" : "This field is required."
      }

      setErrors({
        ...temp
      });

      if (fieldValues === values)
            return Object.values(temp).every(x => x === "")
    }

    const handleInputValue = (event: any) => {
        const { name, value } = event.target;
        setValues({
          ...values,
          [name]: value
        });
        validate({ [name]: value });
    }

    const resetForm = () => {
        setValues(initialFormValues);
        setNewDate(new Date());
        setErrors({})
    }

    const handleFormSubmit = async (e: any) => {
        e.preventDefault();
        if (validate()) {
          createArticle({
              variables: { 
                  title: values.title, 
                  author: values.author, 
                  country: values.country,
                  category: values.category,
                  content: values.content,
                  date: newDate,
            },
          })
          alert("You've posted your article!")
          resetForm()
        }
    }

    // const categoryList = [ "horror", 'fantasy' ];
    // const countryList = [ "Australia", "India", "Nepal", "Vietnam", "USA" ];

    return(
            <form style={style.form} onSubmit={handleFormSubmit}>
                <br /><br />
                <Box style={{font: "bold", marginBottom: "20px"}}>
                    <Typography>Create New Post</Typography>
                </Box>
                <TextField 
                    onBlur={handleInputValue} 
                    onChange={handleInputValue}
                    label="Title" 
                    name= "title"
                    value={values.title}
                    fullWidth 
                    style={style.formItem} 
                    {...(errors["title"] && { error: true, helperText: errors["title"] })}
                />
                <TextField 
                    onBlur={handleInputValue} 
                    onChange={handleInputValue}
                    label="Author" 
                    name="author"
                    value={values.author}
                    fullWidth 
                    style={style.formItem} 
                    {...(errors["author"] && { error: true, helperText: errors["author"]  })}
                />
                <Autocomplete
                    disablePortal
                    options={countries}
                    onChange={handleInputValue} 
                    onBlur={handleInputValue}
                    value={values.country}
                    renderInput={(params) => 
                        <TextField {...params}
                            style={style.formItem} 
                            name="country" 
                            label="Country" 
                            {...(errors["country"] && { error: true, helperText: errors["country"]  })}
                        />}
                />
                <TextField 
                    select="true"
                    fullWidth 
                    name="category"
                    value={values.category} 
                    label="Category" 
                    onChange={handleInputValue}
                    onBlur={handleInputValue} 
                    style={style.formItem}
                    {...(errors["category"] && { error: true, helperText: errors["category"]  })}
                >
                    {data && (data.getAllCategories.map((cat: any) => {
                        return(
                            <MenuItem value={cat.category}>{cat.category}</MenuItem>
                    )}))}
                </TextField>
                <TextField 
                    onBlur={handleInputValue} 
                    onChange={handleInputValue}
                    label="Content"
                    name="content"
                    value={values.content}
                    fullWidth 
                    multiline 
                    rows={8} 
                    style={style.formItem} 
                    {...(errors["content"] && { error: true, helperText: errors["content"]  })}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Date"
                        value={newDate}
                        onChange={newValue => {setNewDate(newValue)}}
                        renderInput={(params) => 
                            <TextField {...params} style={style.formItem} />}
                    />
                </LocalizationProvider>
                <br />
                <Button 
                    variant="contained" 
                    type="submit"
                >
                    Submit Post
                </Button>
                <br /><br />
                <br /><br />
            </form>
    )
}
