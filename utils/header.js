const apikey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFwY3NwZW1wcGRmd212eHNoZmtiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc4MDI2ODUsImV4cCI6MjA0MzM3ODY4NX0.QSLFWq25bHcLDnVSOKWS6tCJlQ6tFCvIhLacXO6iqko"


export const defaultHeader = {
    "apikey": apikey,
    "Authorization": `Bearer ${apikey}`,
    "Content-Type": "application/json"
}