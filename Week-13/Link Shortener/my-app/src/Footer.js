import React from 'react'

const Footer = () => {
  return (
    <React.Fragment>
        <table className='table'>
        <tr>
            <th>Features</th>
            <th>Resources</th>
            <th>Company</th>
            <th>Login</th>
            <th>Sign Up</th>
        </tr>
        <tr>
            <td>Link Shortning</td>
            <td>Blog</td>
            <td>About</td>
            </tr>
        <tr>
            <td>Branded Links</td>
            <td>Developers</td>
            <td>Our Team</td>
        </tr>
        <tr>
            <td>Analytics</td>
            <td>Support</td>
            <td>Careers</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Contact</td>
        </tr>
        </table>
    </React.Fragment>
  )
}

export default Footer;