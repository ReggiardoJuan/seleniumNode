# Update board javascript action

This action updates azure board tasks to given state.

## Inputs

### `new-state`

**Required** Desire state to transition task to. Default `"Done"`.

### `token`

**Required** Auth token.`.

## Example usage

```yaml
uses: actions/updateBoard
with:
  new-state: 'Rdy for deploy'
  token: ${{ secrets.TOKEN }}
```