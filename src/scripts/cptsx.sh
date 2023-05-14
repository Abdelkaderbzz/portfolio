
read -p "Enter folder name: " folder_name
lower=$folder_name
folder_name=$(tr '[:lower:]' '[:upper:]' <<< ${folder_name:0:1})${folder_name:1}
mkdir "$folder_name"
touch "$folder_name"/"_$lower".scss
touch "$folder_name"/"_index.scss"
touch "$folder_name"/"index.ts"
touch "$folder_name"/"$(tr '[:lower:]' '[:upper:]' <<< ${folder_name:0:1})${folder_name:1}.tsx"
touch "$folder_name"/"${lower}.test.tsx"
echo "const $folder_name = () => {" >> "$folder_name/$folder_name.tsx"
echo "  return (" >> "$folder_name/$folder_name.tsx"
echo "    <div>$folder_name</div>" >> "$folder_name/$folder_name.tsx"
echo "  )" >> "$folder_name/$folder_name.tsx"
echo "}" >> "$folder_name/$folder_name.tsx"
echo "export default $folder_name" >> "$folder_name/$folder_name.tsx"

echo "import React from 'react'">> "$folder_name/$lower.test.tsx"
echo "import { render, screen } from '@testing-library/react'; ">> "$folder_name/$lower.test.tsx"
echo "import '@testing-library/jest-dom';">> "$folder_name/$lower.test.tsx"
echo "import $folder_name from './$folder_name';" >> "$folder_name/$lower.test.tsx"
echo "describe('$folder_name component', () => {" >> "$folder_name/$lower.test.tsx"
echo "  test('renders learn react link', () => {" >> "$folder_name/$lower.test.tsx"
echo "  render(<$folder_name />);" >> "$folder_name/$lower.test.tsx"
echo "  const linkElement = screen.getByText(/learn react/i);" >> "$folder_name/$lower.test.tsx"
echo "  expect(linkElement).toBeInTheDocument();" >> "$folder_name/$lower.test.tsx"
echo "  });" >> "$folder_name/$lower.test.tsx"
echo "});" >> "$folder_name/$lower.test.tsx"


echo "@forward './$lower';" >> "$folder_name/_index.scss"
echo "export {default} from './$folder_name';" >> "$folder_name/index.ts"