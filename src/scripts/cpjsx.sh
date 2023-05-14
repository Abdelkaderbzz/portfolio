
read -p "Enter folder name: " folder_name
lower=$folder_name
folder_name=$(tr '[:lower:]' '[:upper:]' <<< ${folder_name:0:1})${folder_name:1}
mkdir "$folder_name"
touch "$folder_name"/"_$lower".scss
touch "$folder_name"/"_index.scss"
touch "$folder_name"/"index.js"
touch "$folder_name"/"$(tr '[:lower:]' '[:upper:]' <<< ${folder_name:0:1})${folder_name:1}.jsx"
touch "$folder_name"/"${lower}.test.jsx"
echo "const $folder_name = () => {" >> "$folder_name/$folder_name.jsx"
echo "  return (" >> "$folder_name/$folder_name.jsx"
echo "    <div>$folder_name</div>" >> "$folder_name/$folder_name.jsx"
echo "  )" >> "$folder_name/$folder_name.jsx"
echo "}" >> "$folder_name/$folder_name.jsx"
echo "export default $folder_name" >> "$folder_name/$folder_name.jsx"

echo "import React from 'react'">> "$folder_name/$lower.test.jsx"
echo "import { render, screen } from '@testing-library/react'; ">> "$folder_name/$lower.test.jsx"
echo "import '@testing-library/jest-dom';">> "$folder_name/$lower.test.jsx"
echo "import $folder_name from './$folder_name';" >> "$folder_name/$lower.test.jsx"
echo "describe('$folder_name component', () => {" >> "$folder_name/$lower.test.jsx"
echo "  test('renders learn react link', () => {" >> "$folder_name/$lower.test.jsx"
echo "  render(<$folder_name />);" >> "$folder_name/$lower.test.jsx"
echo "  const linkElement = screen.getByText(/learn react/i);" >> "$folder_name/$lower.test.jsx"
echo "  expect(linkElement).toBeInTheDocument();" >> "$folder_name/$lower.test.jsx"
echo "  });" >> "$folder_name/$lower.test.jsx"
echo "});" >> "$folder_name/$lower.test.jsx"


echo "@forward './$lower';" >> "$folder_name/_index.scss"
echo "export {default} from './$folder_name';" >> "$folder_name/index.js"